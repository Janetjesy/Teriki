// Shared State and Config
const state = {
    cart: JSON.parse(localStorage.getItem('teriki_cart')) || []
};

// Application Data (Mocked Backend)
const categories = [
    { id: 'lips', name: 'Lips', image: 'img/product_lipstick_rose_1772288678759.png' },
    { id: 'eyes', name: 'Eyes', image: 'img/product_eyeshadow_palette_1772289307951.png' },
    { id: 'face', name: 'Face', image: 'img/product_liquid_foundation_1772289575810.png' },
    { id: 'nails', name: 'Nails', image: 'img/product_nail_polish_1772289865495.png' },
    { id: 'tools', name: 'Tools & Accessories', image: 'img/product_makeup_brushes_1772290013332.png' }
];

const products = [
    {
        id: 'prod_1',
        category_id: 'lips',
        name: 'Velvet Rose Lip Gloss',
        description: 'A luxurious, non-sticky lip gloss that provides a high-shine finish with a subtle rose tint. Enriched with vitamin E for all-day hydration.',
        price: 24.00,
        image_url: 'img/product_lipstick_rose_1772288678759.png',
        featured: true
    },
    {
        id: 'prod_2',
        category_id: 'eyes',
        name: 'Soft Neutrals Palette',
        description: 'An elegant 12-pan eyeshadow palette featuring matte and subtle shimmer shades perfect for everyday wear and gentle transitions.',
        price: 48.00,
        image_url: 'img/product_eyeshadow_palette_1772289307951.png',
        featured: true
    },
    {
        id: 'prod_3',
        category_id: 'face',
        name: 'Luminous Silk Foundation',
        description: 'A lightweight, buildable foundation that delivers a flawless, natural glow. Available in inclusive shades for every undertone.',
        price: 52.00,
        image_url: 'img/product_liquid_foundation_1772289575810.png',
        featured: true
    },
    {
        id: 'prod_4',
        category_id: 'lips',
        name: 'Classic Matte Lipstick - Ruby',
        description: 'A creamy, comfortable matte lipstick in a universally flattering classic red shade.',
        price: 28.00,
        image_url: 'img/product_lipstick_rose_1772288678759.png',
        featured: false
    },
    {
        id: 'prod_5',
        category_id: 'nails',
        name: 'Blush Gel Polish',
        description: 'A chip-resistant, long-wear gel nail polish in an elegant subtle blush pink. Delivers a high-gloss finish.',
        price: 18.00,
        image_url: 'img/product_nail_polish_1772289865495.png',
        featured: true
    },
    {
        id: 'prod_7',
        category_id: 'nails',
        name: 'Ruby Red Gel Polish',
        description: 'A classic, highly pigmented ruby red gel nail polish for a bold and sophisticated look.',
        price: 18.00,
        image_url: 'img/product_nail_polish_red_1773337488662.png',
        featured: true
    },
    {
        id: 'prod_8',
        category_id: 'nails',
        name: 'Midnight Noir Gel Polish',
        description: 'A sleek, deep midnight black gel nail polish that exudes modern elegance and mystery.',
        price: 18.00,
        image_url: 'img/product_nail_polish_black_1773337687427.png',
        featured: false
    },
    {
        id: 'prod_6',
        category_id: 'tools',
        name: 'Pro Artistry Brush Set',
        description: 'A complete set of 8 ultra-soft, vegan makeup brushes with rose gold detailing. Perfect for flawless application.',
        price: 85.00,
        image_url: 'img/product_makeup_brushes_1772290013332.png',
        featured: false
    },
    {
        id: 'prod_9',
        category_id: 'tools',
        name: 'Crystal Glass Nail File',
        description: 'An elegant premium crystal glass nail file with a frosted finish. Gentle on natural nails, preventing splitting and peeling.',
        price: 15.00,
        image_url: 'img/product_nail_file_1773337790487.png',
        featured: false
    },
    {
        id: 'prod_10',
        category_id: 'tools',
        name: 'Pro UV/LED Nail Lamp',
        description: 'A modern, sleek, minimalist dome-shaped professional UV LED nail lamp for flawless at-home gel manicures.',
        price: 65.00,
        image_url: 'img/product_nail_lamp_1773338081677.png',
        featured: true
    }
];

// Utility Functions
const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
};

const updateCartBadge = () => {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.textContent = totalItems;
        // Simple pop animation
        badge.style.transform = 'scale(1.2)';
        setTimeout(() => { badge.style.transform = 'scale(1)'; }, 200);
    }
};

const addToCart = (productId, quantity = 1) => {
    const existingItem = state.cart.find(item => item.product_id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        state.cart.push({ product_id: productId, quantity });
    }
    localStorage.setItem('teriki_cart', JSON.stringify(state.cart));
    updateCartBadge();

    // Optional: Show a toast notification
    alert('Added to cart!');
};

// Component Rendering
const renderProductCard = (product) => {
    return `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="product-card h-100">
                <a href="product.html?id=${product.id}" class="text-decoration-none text-dark d-flex flex-column h-100">
                    <div class="product-img-wrapper">
                        <img src="${product.image_url}" class="product-img" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${categories.find(c => c.id === product.category_id)?.name || ''}</div>
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-price">${formatPrice(product.price)}</div>
                        <button class="btn btn-outline-custom mt-2 w-100" onclick="event.preventDefault(); addToCart('${product.id}')">Add to Bag</button>
                    </div>
                </a>
            </div>
        </div>
    `;
};

const renderCategoryCircle = (category) => {
    return `
        <div class="col-lg-2 col-md-4 col-6 d-flex flex-column align-items-center mb-4">
            <a href="shop.html?category=${category.id}" class="text-decoration-none text-dark">
                <div class="category-circle">
                    <!-- Note: For category circles we generally use transparent PNGs of products or abstract vectors. We'll use the product image with object-fit contain. -->
                    <img src="${category.image}" alt="${category.name}">
                </div>
                <h4 class="category-title mt-2">${category.name}</h4>
            </a>
        </div>
    `;
};

// Page Initialization
const initHomepage = () => {
    // Render Categories
    const categoryContainer = document.getElementById('category-container');
    if (categoryContainer) {
        // Only show up to 5 categories on home page
        categoryContainer.innerHTML = categories.slice(0, 5).map(renderCategoryCircle).join('');
    }

    // Render Featured Products
    const featuredContainer = document.getElementById('featured-products');
    if (featuredContainer) {
        const featuredProducts = products.filter(p => p.featured).slice(0, 4);
        featuredContainer.innerHTML = featuredProducts.map(renderProductCard).join('');
    }
};

// Initialize based on current page
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();

    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        initHomepage();
    }
});
