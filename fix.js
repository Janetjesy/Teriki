const fs = require('fs');

// Fix cart.html
let cart = fs.readFileSync('cart.html', 'utf8');
cart = cart.replace(/<\/div>\s*<\/div>\s*<\/div>\s*container\.innerHTML = '';/, 
`            </div>
        </div>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <!-- App JS -->
    <script src="js/app.js"></script>
    <script>
        document.addEventListener('terikiDataLoaded', () => {
            const renderCart = () => {
                const container = document.getElementById('cart-items-container');
                const summaryContainer = document.getElementById('cart-summary-container');
                const emptyMsg = document.getElementById('empty-cart-msg');

                if (state.cart.length === 0) {
                    container.innerHTML = '';`);
fs.writeFileSync('cart.html', cart);

// Fix offers.html
let offers = fs.readFileSync('offers.html', 'utf8');
offers = offers.replace(/<\/div>\s*<\/div>\s*<\/div>\s*const renderOfferCard = \(p\) => \{/,
`            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/app.js"></script>
    <script>
        document.addEventListener('terikiDataLoaded', () => {
            updateCartBadge();
            const offerProducts = products.filter(p => p.on_offer);
            const offerCountEl = document.getElementById('offer-count');
            if (offerCountEl) offerCountEl.textContent = offerProducts.length;

            let currentFilter = 'all';

            const renderOfferCard = (p) => {`);
fs.writeFileSync('offers.html', offers);

// Fix js/app.js
let appJs = fs.readFileSync('js/app.js', 'utf8');

const targetEndMatch = "    p.reviews = Math.floor(Math.random() * 320) + 18;\r\n});\r\n";
let endIndex = appJs.indexOf(targetEndMatch);
if (endIndex === -1) {
    const targetEndMatch2 = "    p.reviews = Math.floor(Math.random() * 320) + 18;\n});\n";
    endIndex = appJs.indexOf(targetEndMatch2);
    if (endIndex !== -1) endIndex += targetEndMatch2.length;
} else {
    endIndex += targetEndMatch.length;
}

if (endIndex > 0) {
    let newTop = \`const supabaseUrl = 'https://biuldhnnngwvxmvfbztp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpdWxkaG5ubmd3dnhtdmZienRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMzU5ODEsImV4cCI6MjA4OTkxMTk4MX0.bACqQtQWLC3sATRNdrvWprp28qf-CCxKVN_gjrx5wuY';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// Shared State and Config
const state = {
    cart: JSON.parse(localStorage.getItem('teriki_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('teriki_wishlist')) || []
};

// Application Data
let categories = [];
let products = [];

async function loadData() {
    try {
        const [catsResponse, prodsResponse] = await Promise.all([
            supabase.from('categories').select('*'),
            supabase.from('products').select('*')
        ]);
        
        if (catsResponse.error) throw catsResponse.error;
        if (prodsResponse.error) throw prodsResponse.error;
        
        categories = catsResponse.data || [];
        products = prodsResponse.data || [];
        
        products.forEach(p => {
            p.featured = p.is_featured;
            p.reviews = Math.floor(Math.random() * 320) + 18;
            
            const cat = categories.find(c => c.id === p.category_id);
            const catSlug = cat ? cat.slug : '';
            
            if (catSlug === 'lips') {
                p.ingredients = 'Vitamin E, Shea Butter, Jojoba Oil, Natural Pigments.';
                p.details = 'Long-lasting up to 8 hours. Non-drying, comfortable wear.';
            } else if (catSlug === 'eyes') {
                p.ingredients = 'Mica, Talc, Silica, Magnesium Stearate.';
                p.details = 'Crease-proof wear up to 12 hours. Highly blendable.';
            } else if (catSlug === 'face') {
                p.ingredients = 'Water, Glycerin, Hyaluronic Acid, Mineral Pigments.';
                p.details = 'Provides medium-to-full buildable coverage for 24 hours.';
            } else if (catSlug === 'nails') {
                p.ingredients = 'Ethyl Acetate, Butyl Acetate, Nitrocellulose.';
                p.details = 'Chip-resistant gel formula outlasting up to 14 days.';
            } else if (catSlug === 'tools') {
                p.ingredients = '100% Vegan synthetic fibers / Premium materials.';
                p.details = 'Durable and ergonomically designed for professional use.';
            }
        });

        document.dispatchEvent(new Event('terikiDataLoaded'));

    } catch (err) {
        console.error("Error loading from Supabase:", err);
    }
}

// Start loading
loadData();

\`;
    appJs = newTop + appJs.substring(endIndex);
}

// Fix the bottom of app.js
appJs = appJs.replace(
    /document\.addEventListener\\('DOMContentLoaded',\\s*\\(\\)\\s*=>\\s*\\{[\\s\\S]*?initHomepage\\(\\);\\s*\\}\\s*\\}\\);/,
    \`document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    updateWishlistBadge();
    injectGlobalFeatures(); // Inject global components on every page
});

document.addEventListener('terikiDataLoaded', () => {
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        initHomepage();
    }
});\`
);

fs.writeFileSync('js/app.js', appJs);
console.log("Fixes applied successfully!");
