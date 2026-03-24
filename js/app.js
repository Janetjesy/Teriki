// 1. Connection setup
const supabaseUrl = ' https://biuldhnnngwvxmvfbztp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpdWxkaG5ubmd3dnhtdmZienRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMzU5ODEsImV4cCI6MjA4OTkxMTk4MX0.bACqQtQWLC3sATRNdrvWprp28qf-CCxKVN_gjrx5wuY'
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey)

// 2. Function to fetch your categories
async function fetchCategories() {
    console.log("Fetching data from Supabase...");

    const { data, error } = await supabase
        .from('categories')
        .select('*');

    if (error) {
        console.error("Error fetching categories:", error.message);
    } else {
        console.log("Success! Here are your categories:", data);
    }
}

// 3. Run the function
fetchCategories();

// Shared State and Config
const state = {
    cart: JSON.parse(localStorage.getItem('teriki_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('teriki_wishlist')) || []
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
        price: 3000.00,
        image_url: 'img/product_lipstick_rose_1772288678759.png',
        featured: true,
        top_selling: true,
        on_offer: true, discount_price: 2100.00
    },
    {
        id: 'prod_2',
        category_id: 'eyes',
        name: 'Soft Neutrals Palette',
        description: 'An elegant 12-pan eyeshadow palette featuring matte and subtle shimmer shades perfect for everyday wear and gentle transitions.',
        price: 5500.00,
        image_url: 'img/product_eyeshadow_palette_1772289307951.png',
        featured: true,
        on_offer: true, discount_price: 3850.00
    },
    {
        id: 'prod_3',
        category_id: 'face',
        name: 'Luminous Silk Foundation',
        description: 'A lightweight, buildable foundation that delivers a flawless, natural glow. Available in inclusive shades for every undertone.',
        price: 6500.00,
        image_url: 'img/product_liquid_foundation_1772289575810.png',
        featured: true,
        top_selling: true,
        on_offer: true, discount_price: 5200.00
    },
    {
        id: 'prod_4',
        category_id: 'lips',
        name: 'Classic Matte Lipstick - Ruby',
        description: 'A creamy, comfortable matte lipstick in a universally flattering classic red shade.',
        price: 3500.00,
        image_url: 'img/product_lipstick_rose_1772288678759.png',
        featured: false
    },
    {
        id: 'prod_5',
        category_id: 'nails',
        name: 'Blush Gel Polish',
        description: 'A chip-resistant, long-wear gel nail polish in an elegant subtle blush pink. Delivers a high-gloss finish.',
        price: 2200.00,
        image_url: 'img/product_nail_polish_1772289865495.png',
        featured: true,
        top_selling: true,
        on_offer: true, discount_price: 1540.00
    },
    {
        id: 'prod_7',
        category_id: 'nails',
        name: 'Ruby Red Gel Polish',
        description: 'A classic, highly pigmented ruby red gel nail polish for a bold and sophisticated look.',
        price: 2200.00,
        image_url: 'img/product_nail_polish_red_1773337488662.png',
        featured: true
    },
    {
        id: 'prod_8',
        category_id: 'nails',
        name: 'Midnight Noir Gel Polish',
        description: 'A sleek, deep midnight black gel nail polish that exudes modern elegance and mystery.',
        price: 2200.00,
        image_url: 'img/product_nail_polish_black_1773337687427.png',
        featured: false
    },
    {
        id: 'prod_6',
        category_id: 'tools',
        name: 'Pro Artistry Brush Set',
        description: 'A complete set of 8 ultra-soft, vegan makeup brushes with rose gold detailing. Perfect for flawless application.',
        price: 9500.00,
        image_url: 'img/product_makeup_brushes_1772290013332.png',
        featured: false,
        top_selling: true,
        on_offer: true, discount_price: 6650.00
    },
    {
        id: 'prod_9',
        category_id: 'tools',
        name: 'Crystal Glass Nail File',
        description: 'An elegant premium crystal glass nail file with a frosted finish. Gentle on natural nails, preventing splitting and peeling.',
        price: 1800.00,
        image_url: 'img/product_nail_file_1773337790487.png',
        featured: false
    },
    {
        id: 'prod_10',
        category_id: 'tools',
        name: 'Pro UV/LED Nail Lamp',
        description: 'A modern, sleek, minimalist dome-shaped professional UV LED nail lamp for flawless at-home gel manicures.',
        price: 7500.00,
        image_url: 'img/product_nail_lamp_1773338081677.png',
        featured: true,
        on_offer: true, discount_price: 5625.00
    },
    { id: 'prod_11', category_id: 'lips', name: 'Hydrating Lip Oil - Clear Glass', description: 'A deeply nourishing lip oil that provides a high-shine finish without the stickiness. Infused with squalane and jojoba oil.', price: 2800.00, image_url: 'img/product_lipstick_rose_1772288678759.png', featured: true },
    { id: 'prod_12', category_id: 'lips', name: 'Satin Lipstick - Peachy Keen', description: 'A buttery satin finish lipstick in a universally flattering warm peach shade.', price: 3500.00, image_url: 'img/product_lipstick_rose_1772288678759.png', featured: false },
    { id: 'prod_13', category_id: 'eyes', name: 'Volumizing Mascara', description: 'An ultra-black, smudge-proof mascara that delivers dramatic volume and length with a single coat.', price: 4200.00, image_url: 'img/product_mascara_1773847204497.png', featured: true, top_selling: true, on_offer: true, discount_price: 2940.00 },
    { id: 'prod_14', category_id: 'eyes', name: 'Waterproof Gel Eyeliner', description: 'A creamy, highly pigmented gel eyeliner pencil that glides perfectly and sets for all-day wear.', price: 2500.00, image_url: 'img/product_mascara_1773847204497.png', featured: false },
    { id: 'prod_15', category_id: 'eyes', name: 'Brow Sculpting Gel', description: 'A clear, strong-hold brow gel that keeps hairs perfectly placed all day without flaking.', price: 3200.00, image_url: 'img/product_mascara_1773847204497.png', featured: false },
    { id: 'prod_16', category_id: 'face', name: 'Radiant Cream Concealer', description: 'A multi-action concealer that instantly brightens the under-eye area and blurs imperfections.', price: 4800.00, image_url: 'img/product_liquid_foundation_1772289575810.png', featured: true, on_offer: true, discount_price: 3360.00 },
    { id: 'prod_17', category_id: 'face', name: 'Luminous Bronzing Powder', description: 'A finely milled, warm-toned bronzer that gives the skin a sun-kissed, natural glow without looking muddy.', price: 5800.00, image_url: 'img/product_bronzer_1773847555819.png', featured: false, top_selling: true },
    { id: 'prod_18', category_id: 'face', name: 'Dewy Setting Spray', description: 'A refreshing, weightless mist that sets makeup in place for 16 hours while providing a hydrated, glowing finish.', price: 4500.00, image_url: 'img/product_setting_spray_1773847765323.png', featured: true, on_offer: true, discount_price: 3150.00 },
    { id: 'prod_19', category_id: 'face', name: 'Liquid Blush - Coral Flush', description: 'A highly pigmented, blendable liquid blush that melts into the skin for a seamless pop of color.', price: 3900.00, image_url: 'img/product_liquid_foundation_1772289575810.png', featured: false },
    { id: 'prod_20', category_id: 'face', name: 'Translucent Setting Powder', description: 'An ultra-fine setting powder that blurs pores and controls shine without causing flashback.', price: 5500.00, image_url: 'img/product_bronzer_1773847555819.png', featured: false },
    { id: 'prod_21', category_id: 'nails', name: 'High-Gloss Top Coat Gel', description: 'A diamond-shine top coat that seals in color and prevents chipping for up to 14 days.', price: 2400.00, image_url: 'img/product_nail_polish_1772289865495.png', featured: false, top_selling: true },
    { id: 'prod_22', category_id: 'nails', name: 'Nourishing Base Coat', description: 'A vitamin-enriched base coat that protects the natural nail and creates a smooth canvas for color.', price: 2400.00, image_url: 'img/product_nail_polish_red_1773337488662.png', featured: false },
    { id: 'prod_23', category_id: 'tools', name: 'Pro Blend Beauty Sponge', description: 'A latex-free makeup sponge designed to seamlessly blend liquid and cream products for an airbrushed finish.', price: 1500.00, image_url: 'img/product_makeup_brushes_1772290013332.png', featured: true },
    { id: 'prod_24', category_id: 'tools', name: 'Precision Eyelash Curler', description: 'An ergonomically designed eyelash curler that catches every lash for a dramatic, pinch-free lift.', price: 2200.00, image_url: 'img/product_nail_file_1773337790487.png', featured: false },
    { id: 'prod_25', category_id: 'lips', name: 'Matte Liquid Lipstick - Nude', description: 'A weightless, transfer-proof liquid lipstick in a perfectly balanced everyday nude.', price: 3200.00, image_url: 'img/product_lipstick_rose_1772288678759.png', featured: false },
    { id: 'prod_26', category_id: 'lips', name: 'Matte Lipstick - Deep Berry', description: 'A sleek, highly pigmented deep berry matte lipstick that stays perfectly smooth all day.', price: 3400.00, image_url: 'img/product_matte_berry_1773848484463.png', featured: true },
    { id: 'prod_27', category_id: 'lips', name: 'High-Shine Gloss - Cherry Splash', description: 'A glamorous, non-sticky cherry red lip gloss that provides an editorial-level high-shine clear finish.', price: 2900.00, image_url: 'img/product_glossy_lips_1773848270767.png', featured: false, top_selling: true },
    { id: 'prod_28', category_id: 'lips', name: 'Shimmer Gloss - Rose Gold', description: 'A beautiful rose gold lip gloss featuring ultra-fine reflecting pearls and a precise doe-foot applicator.', price: 3100.00, image_url: 'img/product_shimmer_gloss_1773848946080.png', featured: true },
    { id: 'prod_29', category_id: 'lips', name: 'Velvet Plumping Gloss - Petal Pink', description: 'A cooling, plumping gloss in a soft, muted petal pink that naturally enhances the lips.', price: 3300.00, image_url: 'img/product_lipstick_rose_1772288678759.png', featured: false },
    { id: 'prod_30', category_id: 'lips', name: 'Liquid Matte - Scarlet Red', description: 'An intense, vivid scarlet red liquid matte lipstick with 16-hour lock-in technology.', price: 3600.00, image_url: 'img/product_matte_berry_1773848484463.png', featured: false },
    { id: 'prod_31', category_id: 'eyes', name: 'Precision Liquid Eyeliner', description: 'A sleek black liquid eyeliner pen with a continuous flow felt tip for sharp, perfect wings.', price: 2800.00, image_url: 'img/product_mascara_1773847204497.png', featured: true },
    { id: 'prod_32', category_id: 'eyes', name: 'Shimmer Cream Eyeshadow', description: 'A highly blendable, crease-proof champagne cream eyeshadow that sets to a luminous powder finish.', price: 3100.00, image_url: 'img/product_eyeshadow_palette_1772289307951.png', featured: false },
    { id: 'prod_33', category_id: 'eyes', name: 'Natural Flutter False Lashes', description: 'Lightweight, wispy false eyelashes that blend seamlessly with your natural lash line.', price: 2100.00, image_url: 'img/product_mascara_1773847204497.png', featured: false },
    { id: 'prod_34', category_id: 'eyes', name: 'Micro-Fine Brow Pencil', description: 'An ultra-slim, retractable brow pencil for creating precise, hair-like strokes.', price: 2500.00, image_url: 'img/product_mascara_1773847204497.png', featured: false },
    { id: 'prod_35', category_id: 'eyes', name: '24H Eye Primer Base', description: 'A smoothing eyeshadow primer that prevents creasing and intensifies shadow pigmentation.', price: 2700.00, image_url: 'img/product_liquid_foundation_1772289575810.png', featured: false },

    // --- MORE LIPS ---
    { id: 'prod_36', category_id: 'lips', name: 'Ombre Lip Duo - Coral Sunset', description: 'A dual-ended lip duo to create a beautiful coral-to-peach ombre effect effortlessly.', price: 4500.00, image_url: 'img/product_glossy_lips_1773848270767.png', featured: true },
    { id: 'prod_37', category_id: 'lips', name: 'Tinted Lip Balm - SPF 30', description: 'A hydrating, lightly tinted balm with SPF 30 protection. Perfect for everyday wear.', price: 2200.00, image_url: 'img/product_shimmer_gloss_1773848946080.png', featured: false },
    { id: 'prod_38', category_id: 'lips', name: 'Satin Liner - Classic Red', description: 'A smooth, creamy lip liner that defines and shapes in a bold classic red.', price: 2000.00, image_url: 'img/product_matte_berry_1773848484463.png', featured: false },

    // --- MORE EYES ---
    { id: 'prod_39', category_id: 'eyes', name: 'Smoked Kohl Pencil', description: 'A soft, smoky kohl pencil for creating sultry, intense looks. Available in jet black.', price: 2300.00, image_url: 'img/product_mascara_1773847204497.png', featured: false },
    { id: 'prod_40', category_id: 'eyes', name: 'Pink Dreams Eyeshadow Palette', description: 'A curated 12-pan palette spanning soft mauve, blush and dusty rose tones.', price: 7800.00, image_url: 'img/product_eyeshadow_palette_1772289307951.png', featured: true, top_selling: true },
    { id: 'prod_41', category_id: 'eyes', name: 'Lengthening Lash Serum', description: 'A nourishing conditioning serum that promotes longer, thicker-looking lashes with daily use.', price: 6500.00, image_url: 'img/product_mascara_1773847204497.png', featured: false },
    { id: 'prod_42', category_id: 'eyes', name: 'Setting Eye Spray', description: 'A quick-dry mist that locks eyeshadow pigments in place for wearability throughout the day.', price: 3800.00, image_url: 'img/product_setting_spray_1773847765323.png', featured: false },

    // --- MORE FACE ---
    { id: 'prod_43', category_id: 'face', name: 'Glass Skin Serum Foundation', description: 'A lightweight buildable foundation with hyaluronic acid giving skin a glass-like finish.', price: 7200.00, image_url: 'img/product_liquid_foundation_1772289575810.png', featured: true, top_selling: true },
    { id: 'prod_44', category_id: 'face', name: 'Pressed Highlight Powder', description: 'An ultra-fine pressed highlighter in a golden champagne shade that flatters all skin tones.', price: 5400.00, image_url: 'img/product_bronzer_1773847555819.png', featured: false },
    { id: 'prod_45', category_id: 'face', name: 'Pore-Blurring Primer', description: 'A velvety face primer that minimizes the appearance of pores and keeps makeup locked in all day.', price: 5000.00, image_url: 'img/product_setting_spray_1773847765323.png', featured: false },
    { id: 'prod_46', category_id: 'face', name: 'Skin Tint SPF 20 - Medium', description: 'A breathable, skin-perfecting tint that evens out complexion while providing light sun protection.', price: 4600.00, image_url: 'img/product_liquid_foundation_1772289575810.png', featured: false },

    // --- MORE NAILS ---
    { id: 'prod_47', category_id: 'nails', name: 'Gel Polish - Lavender Haze', description: 'A dreamy soft lavender gel polish that cures under UV/LED lamp for chip-free shine.', price: 2600.00, image_url: 'img/product_nail_polish_1772289865495.png', featured: true },
    { id: 'prod_48', category_id: 'nails', name: 'Gel Polish - Ocean Blue', description: 'A rich, deep ocean blue gel polish offering a smooth, high-gloss finish without smudging.', price: 2600.00, image_url: 'img/product_nail_polish_black_1773337687427.png', featured: false },
    { id: 'prod_49', category_id: 'nails', name: 'Nail Strengthener Treatment', description: 'A fortifying nail treatment enriched with biotin and calcium to prevent breakage.', price: 3000.00, image_url: 'img/product_nail_polish_red_1773337488662.png', featured: false },

    // --- MORE TOOLS ---
    { id: 'prod_50', category_id: 'tools', name: 'Fan Brush - Highlight & Contour', description: 'A fluffy fan brush designed to sweep highlighter across cheekbones and blend seamlessly.', price: 2800.00, image_url: 'img/product_makeup_brushes_1772290013332.png', featured: false },
    { id: 'prod_51', category_id: 'tools', name: 'Kabuki Brush - Powder & Blush', description: 'A dense, dome-shaped kabuki brush that buffs powder products into the skin flawlessly.', price: 3200.00, image_url: 'img/product_makeup_brushes_1772290013332.png', featured: false },
    { id: 'prod_52', category_id: 'tools', name: 'Mini Silicone Mixing Palette', description: 'A handy art palette for mixing concealers and foundations to find your perfect shade match.', price: 1200.00, image_url: 'img/product_nail_file_1773337790487.png', featured: false },
    { id: 'prod_53', category_id: 'tools', name: 'Makeup Organizer Pouch', description: 'A chic, travel-friendly makeup bag with multiple compartments to keep your kit tidy.', price: 2500.00, image_url: 'img/product_makeup_brushes_1772290013332.png', featured: true },

    // ===== OFFER-EXCLUSIVE PRODUCTS =====
    // LIPS
    { id: 'offer_1', category_id: 'lips', name: 'Luscious Plum Lip Kit', description: 'A complete lip kit featuring a bold plum matte liquid lipstick and a matching liner for the perfect pout.', price: 6500.00, image_url: 'img/product_matte_berry_1773848484463.png', featured: true, on_offer: true, discount_price: 3900.00 },
    { id: 'offer_2', category_id: 'lips', name: 'Glitter Gloss - Champagne Toast', description: 'An ultra-sparkly champagne glitter gloss that catches the light beautifully for a festive, editorial look.', price: 3800.00, image_url: 'img/product_shimmer_gloss_1773848946080.png', featured: false, on_offer: true, discount_price: 2280.00 },
    { id: 'offer_3', category_id: 'lips', name: 'Marshmallow Pink Liner & Gloss Duo', description: 'A soft marshmallow pink lip liner paired with a matching tinted gloss in travel-sized packaging.', price: 4200.00, image_url: 'img/product_glossy_lips_1773848270767.png', featured: false, on_offer: true, discount_price: 2520.00 },

    // EYES
    { id: 'offer_4', category_id: 'eyes', name: 'Sunset Drama Eyeshadow Palette', description: 'A bold 10-pan palette of warm oranges, burnt coppers, and deep burgundies for stunning sunset looks.', price: 8500.00, image_url: 'img/product_eyeshadow_palette_1772289307951.png', featured: true, on_offer: true, discount_price: 5100.00 },
    { id: 'offer_5', category_id: 'eyes', name: 'Waterproof Lash Sealer', description: 'A clear waterproofing top coat for mascara that extends wear through heat, sweat and humid conditions.', price: 3500.00, image_url: 'img/product_mascara_1773847204497.png', featured: false, on_offer: true, discount_price: 2100.00 },
    { id: 'offer_6', category_id: 'eyes', name: 'Glitter Cut Crease Kit', description: 'Everything you need for a perfect glitter cut crease: pressed glitter, mixing medium, and an angled brush.', price: 7200.00, image_url: 'img/product_eyeshadow_palette_1772289307951.png', featured: false, on_offer: true, discount_price: 4320.00 },

    // FACE
    { id: 'offer_7', category_id: 'face', name: 'Glow Serum Drops', description: 'Concentrated radiance-boosting serum drops enriched with vitamin C and glow pearls. Mix with foundation or wear alone.', price: 8800.00, image_url: 'img/product_setting_spray_1773847765323.png', featured: true, on_offer: true, discount_price: 5280.00 },
    { id: 'offer_8', category_id: 'face', name: 'Contour & Highlight Stick Duo', description: 'A dual-ended cream stick for effortless contouring and highlighting on the go.', price: 5500.00, image_url: 'img/product_bronzer_1773847555819.png', featured: false, on_offer: true, discount_price: 3300.00 },
    { id: 'offer_9', category_id: 'face', name: 'CC Cream SPF 30 - Warm Honey', description: 'A full-coverage colour-correcting cream with SPF 30 in a universally flattering warm honey shade.', price: 6800.00, image_url: 'img/product_liquid_foundation_1772289575810.png', featured: false, on_offer: true, discount_price: 4080.00 },

    // NAILS
    { id: 'offer_10', category_id: 'nails', name: 'Gel Polish - Terracotta Rust', description: 'A rich, earthy terracotta rust gel polish that is seasonally inspired and endlessly chic.', price: 2800.00, image_url: 'img/product_nail_polish_red_1773337488662.png', featured: false, on_offer: true, discount_price: 1680.00 },
    { id: 'offer_11', category_id: 'nails', name: 'Nail Art Stamping Kit', description: 'A beginner-friendly nail art stamping kit with 5 patterned plates, a scraper, and a stamper.', price: 4500.00, image_url: 'img/product_nail_file_1773337790487.png', featured: false, on_offer: true, discount_price: 2700.00 },

    // TOOLS
    { id: 'offer_12', category_id: 'tools', name: 'Rose Gold 12-Piece Brush Set', description: 'A premium set of 12 rose gold makeup brushes for face and eyes, presented in a luxe zip-up case.', price: 12000.00, image_url: 'img/product_makeup_brushes_1772290013332.png', featured: true, on_offer: true, discount_price: 7200.00 },

    // ===== 10 NEW LIP PRODUCTS =====

    // 3 LIP LINERS – different shades
    { id: 'lip_l1', category_id: 'lips', name: 'Precision Lip Liner - Nude Blush', description: 'A creamy, long-lasting lip liner in a soft nude blush that pairs perfectly with everyday lip looks. Defines and prevents feathering.', price: 2000.00, image_url: 'img/product_lipstick_rose_1772288678759.png', featured: false },
    { id: 'lip_l2', category_id: 'lips', name: 'Precision Lip Liner - Berry Plum', description: 'A richly pigmented berry plum lip liner for a bold, defined edge. Perfectly matched for dark lip looks.', price: 2000.00, image_url: 'img/product_matte_berry_1773848484463.png', featured: false },
    { id: 'lip_l3', category_id: 'lips', name: 'Precision Lip Liner - Brick Red', description: 'A deep brick red lip liner that adds intensity to any red or terracotta lip. Smooth, crease-proof formula.', price: 2000.00, image_url: 'img/product_glossy_lips_1773848270767.png', featured: false },

    // 3 LIPSTICKS – different shades
    { id: 'lip_s1', category_id: 'lips', name: 'Velvet Matte Lipstick - Peachy Beige', description: 'A sumptuous matte lipstick in a warm, neutral peachy beige that flatters all skin tones for effortless daytime elegance.', price: 3500.00, image_url: 'img/product_lipstick_rose_1772288678759.png', featured: true },
    { id: 'lip_s2', category_id: 'lips', name: 'Velvet Matte Lipstick - Hot Coral', description: 'A vibrant, statement hot coral matte lipstick with intense pigment payoff in a single swipe. Summer-ready and bold.', price: 3500.00, image_url: 'img/product_glossy_lips_1773848270767.png', featured: false },
    { id: 'lip_s3', category_id: 'lips', name: 'Velvet Matte Lipstick - Midnight Wine', description: 'A deeply romantic midnight wine lipstick with a smooth, velvety finish. Perfect for evenings and dramatic looks.', price: 3500.00, image_url: 'img/product_matte_berry_1773848484463.png', featured: false },

    // 3 GLOSSES – different shades
    { id: 'lip_g1', category_id: 'lips', name: 'Mirror Gloss - Barely There', description: 'An ultra-clear, barely-there mirror gloss that amplifies your natural lip colour with a wet, glass-like shine.', price: 2800.00, image_url: 'img/product_shimmer_gloss_1773848946080.png', featured: false },
    { id: 'lip_g2', category_id: 'lips', name: 'Mirror Gloss - Cotton Candy Pink', description: 'A sweet cotton candy pink gloss with a non-sticky, plumping formula and a high-gloss reflective finish.', price: 2800.00, image_url: 'img/product_lipstick_rose_1772288678759.png', featured: true, top_selling: true },
    { id: 'lip_g3', category_id: 'lips', name: 'Mirror Gloss - Burnt Caramel', description: 'A gorgeous warm burnt caramel gloss with a hint of gold shimmer. Deeply moisturising with a luxe finish.', price: 2800.00, image_url: 'img/product_shimmer_gloss_1773848946080.png', featured: false },

    // 1 BONUS PRODUCT – Lip Scrub
    { id: 'lip_x1', category_id: 'lips', name: 'Brown Sugar Lip Scrub', description: 'An indulgent brown sugar and sweet almond oil lip scrub that exfoliates dead skin and leaves lips silky smooth, plump, and kissable.', price: 1800.00, image_url: 'img/product_glossy_lips_1773848270767.png', featured: false }
];

products.forEach(p => {
    if (p.category_id === 'lips') {
        p.ingredients = 'Vitamin E, Shea Butter, Jojoba Oil, Natural Pigments.';
        p.details = 'Long-lasting up to 8 hours. Non-drying, comfortable wear.';
    } else if (p.category_id === 'eyes') {
        p.ingredients = 'Mica, Talc, Silica, Magnesium Stearate.';
        p.details = 'Crease-proof wear up to 12 hours. Highly blendable.';
    } else if (p.category_id === 'face') {
        p.ingredients = 'Water, Glycerin, Hyaluronic Acid, Mineral Pigments.';
        p.details = 'Provides medium-to-full buildable coverage for 24 hours.';
    } else if (p.category_id === 'nails') {
        p.ingredients = 'Ethyl Acetate, Butyl Acetate, Nitrocellulose.';
        p.details = 'Chip-resistant gel formula outlasting up to 14 days.';
    } else if (p.category_id === 'tools') {
        p.ingredients = '100% Vegan synthetic fibers / Premium materials.';
        p.details = 'Durable and ergonomically designed for professional use.';
    }
    p.reviews = Math.floor(Math.random() * 320) + 18;
});

const renderStars = (reviews) => `
    <div class="text-warning small mb-2 d-flex align-items-center">
        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
        <span class="text-muted ms-1" style="font-size: 0.8rem;">(${reviews})</span>
    </div>
`;

// Utility Functions
const formatPrice = (price) => {
    return 'Ksh ' + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
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

const updateWishlistBadge = () => {
    const badges = document.querySelectorAll('.wishlist-badge');
    badges.forEach(badge => {
        badge.textContent = state.wishlist.length;
        badge.style.transform = 'scale(1.2)';
        setTimeout(() => { badge.style.transform = 'scale(1)'; }, 200);
    });
};

const toggleWishlist = (productId) => {
    const index = state.wishlist.indexOf(productId);
    if (index > -1) {
        state.wishlist.splice(index, 1);
    } else {
        state.wishlist.push(productId);
    }
    localStorage.setItem('teriki_wishlist', JSON.stringify(state.wishlist));
    updateWishlistBadge();

    // Update all visible heart icons for this product
    document.querySelectorAll(`.wishlist-btn[data-id="${productId}"]`).forEach(btn => {
        if (index > -1) {
            btn.innerHTML = '<i class="bi bi-heart"></i>';
            btn.classList.remove('active');
        } else {
            btn.innerHTML = '<i class="bi bi-heart-fill text-danger"></i>';
            btn.classList.add('active');
        }
    });
};

// Component Rendering
const renderProductCard = (product) => {
    const isWished = state.wishlist.includes(product.id);
    const heartIcon = isWished ? '<i class="bi bi-heart-fill text-danger"></i>' : '<i class="bi bi-heart"></i>';

    return `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="product-card h-100 position-relative">
                <button class="wishlist-btn ${isWished ? 'active' : ''}" data-id="${product.id}" onclick="event.preventDefault(); event.stopPropagation(); toggleWishlist('${product.id}')">
                    ${heartIcon}
                </button>
                <a href="product.html?id=${product.id}" class="text-decoration-none text-dark d-flex flex-column h-100">
                    <div class="product-img-wrapper">
                        <img src="${product.image_url}" class="product-img" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <div class="product-category">${categories.find(c => c.id === product.category_id)?.name || ''}</div>
                        <h3 class="product-title">${product.name}</h3>
                        ${renderStars(product.reviews)}
                        <div class="product-price mb-2">${formatPrice(product.price)}</div>
                        <div class="d-flex gap-2 w-100 z-3 position-relative">
                            <button class="btn btn-outline-custom flex-grow-1 px-1" onclick="event.preventDefault(); event.stopPropagation(); addToCart('${product.id}')">Add to Bag</button>
                            <span class="btn btn-dark flex-grow-1 px-1">View Product</span>
                        </div>
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

const showProductInfo = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let modalEl = document.getElementById('quickInfoModal');
    if (!modalEl) {
        document.body.insertAdjacentHTML('beforeend', `
            <div class="modal fade" id="quickInfoModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content border-0">
                        <div class="modal-header border-0 pb-0">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body px-4 pb-4">
                            <div class="d-flex align-items-center mb-4">
                                <img src="" id="qi-image" class="rounded me-3 border" style="width: 80px; height: 80px; object-fit: cover;">
                                <div>
                                    <h5 class="mb-1 fw-bold" id="qi-title"></h5>
                                    <div class="text-muted small text-uppercase letter-spacing-1" id="qi-category"></div>
                                </div>
                            </div>
                            <h6 class="font-heading mb-2 fw-bold text-dark">Details & Wear</h6>
                            <p class="text-muted small mb-4" id="qi-details"></p>
                            <h6 class="font-heading mb-2 fw-bold text-dark">Ingredients & Materials</h6>
                            <p class="text-muted small mb-4" id="qi-ingredients"></p>
                        </div>
                        <div class="modal-footer border-0 pt-0 px-4 pb-4">
                            <button class="btn btn-primary-custom w-100 py-3" id="qi-add-btn">Add to Bag - <span id="qi-price"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        `);
        modalEl = document.getElementById('quickInfoModal');
    }

    document.getElementById('qi-image').src = product.image_url;
    document.getElementById('qi-title').textContent = product.name;
    document.getElementById('qi-category').textContent = categories.find(c => c.id === product.category_id)?.name || '';
    document.getElementById('qi-details').textContent = product.details || product.description;
    document.getElementById('qi-ingredients').textContent = product.ingredients || 'Details unavailable.';
    document.getElementById('qi-price').textContent = formatPrice(product.price);

    document.getElementById('qi-add-btn').onclick = () => {
        addToCart(product.id);
        const modalInstance = bootstrap.Modal.getInstance(modalEl);
        if (modalInstance) modalInstance.hide();
    };

    const modal = new bootstrap.Modal(modalEl);
    modal.show();
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

    // Render Top Selling Products
    const topSellingContainer = document.getElementById('top-selling-products');
    if (topSellingContainer) {
        const topSellingProducts = products.filter(p => p.top_selling).slice(0, 4);
        topSellingContainer.innerHTML = topSellingProducts.map(renderProductCard).join('');
    }
};

// --- Global Site Features ---
const injectGlobalFeatures = () => {
    // 1. Floating WhatsApp Button
    if (!document.querySelector('.whatsapp-float')) {
        const waBtn = document.createElement('a');
        waBtn.href = 'https://wa.me/254112086888';
        waBtn.target = '_blank';
        waBtn.className = 'whatsapp-float';
        waBtn.innerHTML = '<i class="bi bi-whatsapp"></i>';
        document.body.appendChild(waBtn);
    }

    // 2. Back to Top Button
    if (!document.querySelector('.back-to-top')) {
        const topBtn = document.createElement('div');
        topBtn.className = 'back-to-top';
        topBtn.innerHTML = '<i class="bi bi-chevron-up"></i>';
        topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.appendChild(topBtn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                topBtn.classList.add('visible');
            } else {
                topBtn.classList.remove('visible');
            }
        });
    }

    // 3. Cookie Consent Banner
    if (!localStorage.getItem('teriki_cookie_consent') && !window.location.pathname.endsWith('privacy.html')) {
        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div class="mb-3 mb-md-0 text-center text-md-start">
                    <p class="mb-1 fw-bold"><i class="bi bi-cookie me-2" style="color:var(--primary-dark)"></i>We value your privacy</p>
                    <p class="mb-0 text-muted small">We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. <a href="privacy.html" style="color:var(--primary-dark)" class="text-decoration-underline">Read More</a></p>
                </div>
                <div class="d-flex gap-2">
                    <button id="declineCookies" class="btn btn-outline-custom px-4 py-2" style="font-size:0.85rem">Decline</button>
                    <button id="acceptCookies" class="btn btn-primary-custom px-4 py-2" style="font-size:0.85rem">Accept All</button>
                </div>
            </div>
        `;
        document.body.appendChild(banner);

        setTimeout(() => banner.classList.add('show'), 1000);

        const handleConsent = () => {
            localStorage.setItem('teriki_cookie_consent', 'true');
            banner.classList.remove('show');
            setTimeout(() => banner.remove(), 500);
        };

        document.getElementById('acceptCookies').addEventListener('click', handleConsent);
        document.getElementById('declineCookies').addEventListener('click', handleConsent);
    }

    // 4. Newsletter Popup
    if (!sessionStorage.getItem('teriki_newsletter_shown')) {
        const popupHTML = `
            <div class="modal fade" id="newsletterPopup" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content newsletter-popup-bg border-0 shadow-lg">
                        <div class="modal-body text-center p-5 position-relative">
                            <button type="button" class="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal" aria-label="Close"></button>
                            <i class="bi bi-envelope-paper fs-1 mb-3" style="color:var(--primary-dark)"></i>
                            <h3 class="font-heading mb-3 fw-bold">Unlock 10% Off!</h3>
                            <p class="text-muted mb-4">Join the Teriki family. Get exclusive access to new launches, beauty tips, and VIP discounts directly to your inbox.</p>
                            <form onsubmit="event.preventDefault(); document.getElementById('nl-success').classList.remove('d-none'); this.classList.add('d-none');">
                                <input type="email" class="form-control rounded-pill mb-3 text-center py-2 border-dark" placeholder="Enter your email address" required>
                                <button type="submit" class="btn btn-dark rounded-pill w-100 py-2 fw-bold">GET MY 10% OFF</button>
                            </form>
                            <div id="nl-success" class="d-none">
                                <div class="alert alert-success rounded-pill mb-0 border-0" style="background-color:#d4edda; color:#155724;">
                                    <i class="bi bi-check-circle-fill me-2"></i>You're in! Check your email for your code.
                                </div>
                            </div>
                            <p class="text-muted small mt-4 mb-0" style="font-size:0.7rem;">No spam, ever. Unsubscribe anytime.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = popupHTML;
        document.body.appendChild(modalContainer);

        // Show after 4 seconds
        setTimeout(() => {
            if (typeof bootstrap !== 'undefined') {
                const nlModal = new bootstrap.Modal(document.getElementById('newsletterPopup'));
                nlModal.show();
                sessionStorage.setItem('teriki_newsletter_shown', 'true');
            }
        }, 4000);
    }
};

// Initialize based on current page
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    updateWishlistBadge();
    injectGlobalFeatures(); // Inject global components on every page

    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        initHomepage();
    }
});

