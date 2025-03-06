// Products JavaScript for Swagg E-commerce

// Produits de démonstration avec images en ligne
const products = [
    {
        id: 1,
        name: "Robe fleurie d'été",
        price: 15000,
        description: "Une magnifique robe fleurie parfaite pour l'été. Légère et confortable, elle vous accompagnera lors de vos sorties estivales.",
        image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        category: "vetements",
        featured: true,
        new: true,
        colors: ["Rouge", "Bleu", "Blanc"],
        sizes: ["S", "M", "L", "XL"],
        related: [2, 5, 8]
    },
    {
        id: 2,
        name: "Sac à main élégant",
        price: 12000,
        description: "Un sac à main élégant qui complétera parfaitement votre tenue. Spacieux et pratique avec plusieurs compartiments.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        category: "accessoires",
        featured: true,
        new: false,
        colors: ["Noir", "Marron", "Beige"],
        sizes: [],
        related: [3, 6, 9]
    },
    {
        id: 3,
        name: "Blouse en soie",
        price: 22000,
        description: "Une blouse en soie élégante et intemporelle. Parfaite pour le bureau ou pour une sortie en ville.",
        image: "https://images.unsplash.com/photo-1551163943-3f7e29e5ed20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        category: "vetements",
        featured: true,
        new: false,
        colors: ["Blanc", "Noir", "Bleu marine"],
        sizes: ["S", "M", "L"],
        related: [1, 7, 10]
    },
    {
        id: 4,
        name: "Boucles d'oreilles pendantes",
        price: 8000,
        description: "Des boucles d'oreilles pendantes qui ajouteront une touche d'élégance à votre tenue. Légères et confortables à porter.",
        image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        category: "accessoires",
        featured: false,
        new: true,
        colors: ["Or", "Argent"],
        sizes: [],
        related: [2, 8, 11]
    },
    {
        id: 5,
        name: "Jupe plissée midi",
        price: 17000,
        description: "Une jupe plissée midi élégante et polyvalente. Peut être portée en toute saison.",
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        category: "vetements",
        featured: false,
        new: true,
        colors: ["Noir", "Beige", "Bleu marine"],
        sizes: ["S", "M", "L"],
        related: [1, 4, 10]
    },
    {
        id: 6,
        name: "Collier en perles",
        price: 13000,
        description: "Un collier en perles élégant qui ajoutera une touche de sophistication à votre tenue.",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        category: "accessoires",
        featured: false,
        new: false,
        colors: ["Blanc", "Rose"],
        sizes: [],
        related: [2, 5, 11]
    },
    {
        id: 7,
        name: "Pantalon taille haute",
        price: 19000,
        description: "Un pantalon taille haute élégant et confortable, parfait pour le bureau ou les sorties.",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        category: "vetements",
        featured: false,
        new: false,
        colors: ["Noir", "Beige", "Bleu marine"],
        sizes: ["S", "M", "L", "XL"],
        related: [1, 4, 7]
    },
    {
        id: 8,
        name: "Bracelet en argent",
        price: 9000,
        description: "Un bracelet en argent élégant qui complétera parfaitement votre tenue.",
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        category: "accessoires",
        featured: false,
        new: true,
        colors: ["Argent", "Or"],
        sizes: [],
        related: [2, 5, 11]
    },
    {
        id: 9,
        name: "Robe de soirée",
        price: 28000,
        description: "Une élégante robe de soirée pour briller lors de vos événements spéciaux.",
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        category: "vetements",
        featured: true,
        new: true,
        colors: ["Noir", "Rouge", "Bleu nuit"],
        sizes: ["S", "M", "L"],
        related: [1, 3, 5]
    },
    {
        id: 10,
        name: "Lunettes de soleil",
        price: 11000,
        description: "Des lunettes de soleil tendance pour protéger vos yeux avec style.",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        category: "accessoires",
        featured: true,
        new: false,
        colors: ["Noir", "Marron", "Rose"],
        sizes: [],
        related: [2, 4, 8]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Display featured products on homepage
    displayFeaturedProducts();
    
    // Check if we're on the products page
    if (window.location.pathname.includes('products.html')) {
        // Get URL parameters for filtering
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');
        
        // Display all products with optional category filter
        displayProducts(categoryParam);
        
        // Set up filter and sort functionality
        setupFilters();
    }
    
    // Check if we're on the product detail page
    if (window.location.pathname.includes('product-detail.html')) {
        // Get product ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));
        
        // Display product details
        displayProductDetails(productId);
    }
});

// Display featured products on homepage
function displayFeaturedProducts() {
    const featuredProductsContainer = document.getElementById('featured-products');
    if (!featuredProductsContainer) return;
    
    // Clear loading placeholders
    featuredProductsContainer.innerHTML = '';
    
    // Filter featured products
    const featuredProducts = products.filter(product => product.featured);
    
    // Display each featured product
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        featuredProductsContainer.appendChild(productCard);
    });
}

// Display all products with optional category filter
function displayProducts(category = null) {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) return;
    
    // Clear container
    productsContainer.innerHTML = '';
    
    // Filter products by category if specified
    let filteredProducts = products;
    if (category) {
        filteredProducts = products.filter(product => product.category === category);
        
        // Update category title
        const categoryTitle = document.getElementById('category-title');
        if (categoryTitle) {
            const categoryName = getCategoryName(category);
            categoryTitle.textContent = categoryName;
        }
    }
    
    // Display each product
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
    
    // Update product count
    const productCount = document.getElementById('product-count');
    if (productCount) {
        productCount.textContent = `${filteredProducts.length} produits`;
    }
}

// Create a product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card shadow-md';
    
    // Create card content
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            ${product.new ? '<span class="product-badge">Nouveau</span>' : ''}
            <div class="product-actions">
                <button class="w-full bg-white text-pink-600 hover:bg-pink-600 hover:text-white transition py-2 rounded-full font-medium add-to-cart-btn" data-id="${product.id}">
                    Ajouter au panier
                </button>
            </div>
        </div>
        <div class="p-4">
            <h3 class="text-lg font-medium text-gray-800 mb-1">${product.name}</h3>
            <p class="text-pink-600 font-bold">${product.price.toLocaleString()} FCFA</p>
        </div>
    `;
    
    // Add event listener to the "Add to Cart" button
    card.querySelector('.add-to-cart-btn').addEventListener('click', function(e) {
        e.preventDefault();
        window.swaggCart.addToCart(product.id, product.name, product.price, product.image);
    });
    
    // Add event listener to navigate to product detail page
    card.querySelector('.product-image-container').addEventListener('click', function(e) {
        // Don't navigate if clicking the add to cart button
        if (!e.target.classList.contains('add-to-cart-btn')) {
            window.location.href = `product-detail.html?id=${product.id}`;
        }
    });
    
    return card;
}

// Display product details on product detail page
function displayProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Update page title
    document.title = `${product.name} - Swagg`;
    
    // Update product details
    const productImage = document.getElementById('product-image');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    const productDescription = document.getElementById('product-description');
    const colorOptions = document.getElementById('color-options');
    const sizeOptions = document.getElementById('size-options');
    
    if (productImage) productImage.src = product.image;
    if (productName) productName.textContent = product.name;
    if (productPrice) productPrice.textContent = `${product.price.toLocaleString()} FCFA`;
    if (productDescription) productDescription.textContent = product.description;
    
    // Populate color options
    if (colorOptions && product.colors) {
        colorOptions.innerHTML = '';
        product.colors.forEach(color => {
            const colorOption = document.createElement('div');
            colorOption.className = 'color-option cursor-pointer border-2 border-transparent hover:border-gray-400 rounded-full p-1';
            colorOption.innerHTML = `
                <span class="block w-6 h-6 rounded-full bg-${getColorClass(color)}"></span>
            `;
            colorOption.setAttribute('data-color', color);
            colorOptions.appendChild(colorOption);
        });
        
        // Select first color by default
        const firstColorOption = colorOptions.querySelector('.color-option');
        if (firstColorOption) {
            firstColorOption.classList.add('border-gray-800');
        }
    }
    
    // Populate size options
    if (sizeOptions && product.sizes) {
        sizeOptions.innerHTML = '';
        product.sizes.forEach(size => {
            const sizeOption = document.createElement('div');
            sizeOption.className = 'size-option cursor-pointer border border-gray-300 hover:border-gray-800 rounded-md px-3 py-1 text-center';
            sizeOption.textContent = size;
            sizeOption.setAttribute('data-size', size);
            sizeOptions.appendChild(sizeOption);
        });
        
        // Select first size by default
        const firstSizeOption = sizeOptions.querySelector('.size-option');
        if (firstSizeOption) {
            firstSizeOption.classList.add('bg-gray-800', 'text-white');
        }
    }
    
    // Add to cart button functionality
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const quantityInput = document.getElementById('quantity');
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
            const selectedColor = colorOptions ? colorOptions.querySelector('.border-gray-800').getAttribute('data-color') : null;
            const selectedSize = sizeOptions ? sizeOptions.querySelector('.bg-gray-800').getAttribute('data-size') : null;
            
            // Add to cart with selected options
            window.swaggCart.addToCart(product.id, product.name, product.price, product.image, quantity);
        });
    }
    
    // Display related products
    displayRelatedProducts(product);
}

// Display related products on product detail page
function displayRelatedProducts(currentProduct) {
    const relatedProductsContainer = document.getElementById('related-products');
    if (!relatedProductsContainer) return;
    
    // Get products in the same category
    const relatedProducts = products
        .filter(product => product.category === currentProduct.category && product.id !== currentProduct.id)
        .slice(0, 4); // Limit to 4 related products
    
    // Clear container
    relatedProductsContainer.innerHTML = '';
    
    // Display each related product
    relatedProducts.forEach(product => {
        const productCard = createProductCard(product);
        relatedProductsContainer.appendChild(productCard);
    });
}

// Set up filter and sort functionality on products page
function setupFilters() {
    const categoryFilters = document.querySelectorAll('.category-filter');
    const sortSelect = document.getElementById('sort-select');
    
    // Category filter functionality
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active filter
            categoryFilters.forEach(f => f.classList.remove('bg-pink-600', 'text-white'));
            this.classList.add('bg-pink-600', 'text-white');
            
            // Display filtered products
            displayProducts(category === 'all' ? null : category);
        });
    });
    
    // Sort functionality
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortBy = this.value;
            const urlParams = new URLSearchParams(window.location.search);
            const categoryParam = urlParams.get('category');
            
            // Get filtered products
            let filteredProducts = products;
            if (categoryParam) {
                filteredProducts = products.filter(product => product.category === categoryParam);
            }
            
            // Sort products
            switch (sortBy) {
                case 'price-asc':
                    filteredProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    filteredProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'name-asc':
                    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'name-desc':
                    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case 'newest':
                    filteredProducts.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
                    break;
            }
            
            // Display sorted products
            const productsContainer = document.getElementById('products-container');
            if (productsContainer) {
                productsContainer.innerHTML = '';
                filteredProducts.forEach(product => {
                    const productCard = createProductCard(product);
                    productsContainer.appendChild(productCard);
                });
            }
        });
    }
}

// Helper function to get category name from category slug
function getCategoryName(category) {
    switch (category) {
        case 'vetements':
            return 'Vêtements';
        case 'accessoires':
            return 'Accessoires';
        case 'chaussures':
            return 'Chaussures';
        default:
            return 'Tous les produits';
    }
}

// Helper function to get Tailwind color class from color name
function getColorClass(color) {
    switch (color.toLowerCase()) {
        case 'noir':
            return 'black';
        case 'blanc':
            return 'white';
        case 'rouge':
            return 'red-500';
        case 'bleu':
            return 'blue-500';
        case 'bleu marine':
            return 'blue-900';
        case 'rose':
            return 'pink-500';
        case 'beige':
            return 'yellow-100';
        case 'marron':
            return 'yellow-800';
        case 'or':
            return 'yellow-500';
        case 'argent':
            return 'gray-300';
        case 'rose gold':
            return 'pink-300';
        default:
            return 'gray-500';
    }
} 