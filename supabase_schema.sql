-- Supabase Schema for Teriki E-Commerce

-- 1. Create Categories Table
create table public.categories (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    slug text not null unique,
    image_url text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Create Products Table
create table public.products (
    id uuid default gen_random_uuid() primary key,
    category_id uuid references public.categories(id) on delete restrict,
    name text not null,
    description text,
    price numeric(10, 2) not null check (price >= 0),
    image_url text,
    is_featured boolean default false,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Create Cart Items Table (For persistent carts tied to users)
create table public.cart_items (
    id uuid default gen_random_uuid() primary key,
    user_id uuid references auth.users(id) on delete cascade not null,
    product_id uuid references public.products(id) on delete cascade not null,
    quantity integer not null check (quantity > 0),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    unique(user_id, product_id) -- Prevent duplicate rows for the same product in a user's cart
);

-- Enable Row Level Security (RLS)
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.cart_items enable row level security;

-- Policies for Categories
create policy "Categories are viewable by everyone" on public.categories
    for select using (true);

-- Policies for Products
create policy "Products are viewable by everyone" on public.products
    for select using (true);

-- Policies for Cart Items (Users can only see and modify their own cart)
create policy "Users can view their own cart items" on public.cart_items
    for select using (auth.uid() = user_id);

create policy "Users can insert their own cart items" on public.cart_items
    for insert with check (auth.uid() = user_id);

create policy "Users can update their own cart items" on public.cart_items
    for update using (auth.uid() = user_id);

create policy "Users can delete their own cart items" on public.cart_items
    for delete using (auth.uid() = user_id);

-- Insert Initial Mock Data
insert into public.categories (id, name, slug) values
    ('f0f0f0f0-f0f0-f0f0-f0f0-f0f0f0f0f0f1', 'Lips', 'lips'),
    ('f0f0f0f0-f0f0-f0f0-f0f0-f0f0f0f0f0f2', 'Eyes', 'eyes'),
    ('f0f0f0f0-f0f0-f0f0-f0f0-f0f0f0f0f0f3', 'Face', 'face'),
    ('f0f0f0f0-f0f0-f0f0-f0f0-f0f0f0f0f0f4', 'Nails', 'nails'),
    ('f0f0f0f0-f0f0-f0f0-f0f0-f0f0f0f0f0f5', 'Tools & Accessories', 'tools');
