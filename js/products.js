// Products JavaScript for TechPro E-commerce

// Produits de démonstration avec images en ligne
const products = [
    {
        id: 1,
        name: "PC Gamer RTX 4080",
        price: 1850000,
        description: "PC Gamer ultra-performant avec processeur Intel Core i9-13900K, carte graphique NVIDIA RTX 4080 16GB, 32 Go de RAM DDR5, SSD NVMe 2 To, refroidissement liquide et éclairage RGB personnalisable.",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        category: "ordinateurs",
        featured: true,
        new: true,
        colors: ["Noir", "Blanc"],
        sizes: [],
        related: [2, 5, 8]
    },
    {
        id: 2,
        name: "Carte graphique RTX 4070 Ti",
        price: 750000,
        description: "Carte graphique NVIDIA GeForce RTX 4070 Ti avec 12 Go de mémoire GDDR6X, ray tracing en temps réel, DLSS 3.0 et performances de jeu exceptionnelles en 4K.",
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        category: "composants",
        featured: true,
        new: true,
        colors: ["Noir"],
        sizes: [],
        related: [3, 6, 9]
    },
    {
        id: 3,
        name: "Processeur AMD Ryzen 9 7950X",
        price: 350000,
        description: "Processeur AMD Ryzen 9 7950X avec 16 cœurs et 32 threads, fréquence boost jusqu'à 5,7 GHz, cache L3 de 64 Mo, compatible socket AM5 et PCIe 5.0.",
        image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        category: "composants",
        featured: true,
        new: false,
        colors: ["Noir"],
        sizes: [],
        related: [1, 7, 10]
    },
    {
        id: 4,
        name: "Écran gaming 32\" 240Hz",
        price: 450000,
        description: "Écran gaming 32 pouces incurvé avec résolution QHD (2560x1440), taux de rafraîchissement de 240Hz, temps de réponse de 1ms, compatible G-Sync et HDR 600.",
        image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
        category: "accessoires",
        featured: true,
        new: false,
        colors: ["Noir"],
        sizes: [],
        related: [5, 8, 11]
    },
    {
        id: 5,
        name: "Clavier mécanique RGB",
        price: 85000,
        description: "Clavier mécanique gaming avec switches Cherry MX Red, rétroéclairage RGB personnalisable, touches macro programmables et repose-poignets ergonomique.",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80",
        category: "accessoires",
        featured: true,
        new: false,
        colors: ["Noir", "Blanc"],
        sizes: [],
        related: [4, 6, 12]
    },
    {
        id: 6,
        name: "Souris gaming sans fil",
        price: 65000,
        description: "Souris gaming sans fil avec capteur optique 25 600 DPI, 8 boutons programmables, éclairage RGB, autonomie de 70 heures et poids ajustable.",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1128&q=80",
        category: "accessoires",
        featured: false,
        new: true,
        colors: ["Noir", "Blanc"],
        sizes: [],
        related: [5, 7, 13]
    },
    {
        id: 7,
        name: "Carte mère ASUS ROG Z790",
        price: 280000,
        description: "Carte mère ASUS ROG Maximus Z790 Hero avec socket LGA 1700, 4 slots DDR5, PCIe 5.0, Wi-Fi 6E, Bluetooth 5.3, USB 3.2 Gen 2x2 et éclairage Aura Sync RGB.",
        image: "https://images.unsplash.com/photo-1563770660941-10a63607957a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        category: "composants",
        featured: false,
        new: false,
        colors: ["Noir"],
        sizes: [],
        related: [2, 3, 14]
    },
    {
        id: 8,
        name: "Ordinateur portable gaming",
        price: 1200000,
        description: "Ordinateur portable gaming avec écran 17,3\" 165Hz, processeur Intel Core i7-13700H, carte graphique RTX 4070 8GB, 16 Go de RAM DDR5 et SSD NVMe 1 To.",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
        category: "ordinateurs",
        featured: false,
        new: true,
        colors: ["Noir"],
        sizes: [],
        related: [1, 4, 15]
    },
    {
        id: 9,
        name: "Mémoire RAM DDR5 32GB",
        price: 120000,
        description: "Kit mémoire RAM DDR5 32GB (2x16GB) à 6000MHz, CL36, avec dissipateur thermique en aluminium et éclairage RGB synchronisable.",
        image: "https://images.unsplash.com/photo-1562976540-1502c2145186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        category: "composants",
        featured: false,
        new: false,
        colors: ["Noir", "Blanc"],
        sizes: [],
        related: [2, 3, 7]
    },
    {
        id: 10,
        name: "SSD NVMe 2TB",
        price: 150000,
        description: "SSD NVMe PCIe 4.0 de 2TB avec vitesses de lecture jusqu'à 7000 Mo/s et d'écriture jusqu'à 6500 Mo/s, idéal pour les jeux et applications exigeantes.",
        image: "https://images.unsplash.com/photo-1597338770339-9d3d5e137e38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        category: "composants",
        featured: false,
        new: false,
        colors: ["Noir"],
        sizes: [],
        related: [3, 7, 9]
    },
    {
        id: 11,
        name: "Casque gaming sans fil",
        price: 95000,
        description: "Casque gaming sans fil avec son surround 7.1, microphone détachable à réduction de bruit, autonomie de 30 heures et coussinets à mémoire de forme.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        category: "accessoires",
        featured: false,
        new: false,
        colors: ["Noir", "Blanc"],
        sizes: [],
        related: [5, 6, 12]
    },
    {
        id: 12,
        name: "Tapis de souris XXL",
        price: 25000,
        description: "Tapis de souris gaming XXL (900x400mm) avec surface en tissu à faible friction, base antidérapante en caoutchouc et bords cousus anti-effilochage.",
        image: "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        category: "accessoires",
        featured: false,
        new: false,
        colors: ["Noir"],
        sizes: [],
        related: [5, 6, 11]
    }
];

// Fonction pour afficher les produits en vedette sur la page d'accueil
function displayFeaturedProducts() {
    const featuredProductsContainer = document.getElementById('featured-products');
    
    if (featuredProductsContainer) {
        // Vider le conteneur des produits en vedette
        featuredProductsContainer.innerHTML = '';
        
        // Filtrer les produits en vedette
        const featuredProducts = products.filter(product => product.featured);
        
        // Afficher les produits en vedette
        featuredProducts.forEach(product => {
            const productCard = createProductCard(product);
            featuredProductsContainer.appendChild(productCard);
        });
    }
}

// Fonction pour afficher les produits sur la page des produits
function displayProducts(category = null) {
    const productsContainer = document.getElementById('products-container');
    
    if (productsContainer) {
        // Vider le conteneur des produits
        productsContainer.innerHTML = '';
        
        // Filtrer les produits par catégorie si nécessaire
        let filteredProducts = products;
        if (category) {
            filteredProducts = products.filter(product => product.category === category);
            
            // Mettre à jour le titre de la catégorie
            const categoryTitle = document.getElementById('category-title');
            if (categoryTitle) {
                categoryTitle.textContent = getCategoryName(category);
            }
        }
        
        // Afficher les produits
        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            productsContainer.appendChild(productCard);
        });
    }
}

// Fonction pour créer une carte de produit
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card shadow-md';
    
    // Formater le prix
    const formattedPrice = product.price.toLocaleString() + ' FCFA';
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            ${product.new ? '<span class="product-badge">Nouveau</span>' : ''}
            <div class="product-actions">
                <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition" onclick="window.swaggCart.addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">
                    <i class="fas fa-shopping-cart mr-2"></i> Ajouter au panier
                </button>
            </div>
        </div>
        <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-1">${product.name}</h3>
            <p class="text-blue-600 font-bold">${formattedPrice}</p>
            <a href="product-detail.html?id=${product.id}" class="mt-2 inline-block text-sm text-blue-600 hover:text-blue-800 transition">
                Voir les détails <i class="fas fa-chevron-right text-xs ml-1"></i>
            </a>
        </div>
    `;
    
    // Ajouter un événement de clic pour rediriger vers la page de détails du produit
    card.addEventListener('click', function(e) {
        // Ne pas rediriger si le clic est sur le bouton d'ajout au panier
        if (!e.target.closest('button')) {
            window.location.href = `product-detail.html?id=${product.id}`;
        }
    });
    
    return card;
}

// Fonction pour afficher les détails d'un produit
function displayProductDetails(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    
    if (product) {
        // Mettre à jour les éléments de la page avec les détails du produit
        const productImage = document.getElementById('product-image');
        const productName = document.getElementById('product-name');
        const productPrice = document.getElementById('product-price');
        const productDescription = document.getElementById('product-description');
        const productCategory = document.getElementById('product-category');
        const colorOptions = document.getElementById('color-options');
        const addToCartBtn = document.getElementById('add-to-cart-btn');
        
        if (productImage) productImage.src = product.image;
        if (productName) productName.textContent = product.name;
        if (productPrice) productPrice.textContent = product.price.toLocaleString() + ' FCFA';
        if (productDescription) productDescription.textContent = product.description;
        if (productCategory) productCategory.textContent = getCategoryName(product.category);
        
        // Afficher les options de couleur
        if (colorOptions) {
            colorOptions.innerHTML = '';
            
            product.colors.forEach(color => {
                const colorOption = document.createElement('div');
                colorOption.className = `w-8 h-8 rounded-full cursor-pointer border-2 border-transparent hover:border-blue-600 ${getColorClass(color)}`;
                colorOption.setAttribute('data-color', color);
                colorOption.addEventListener('click', function() {
                    // Supprimer la classe active de toutes les options
                    document.querySelectorAll('#color-options > div').forEach(opt => {
                        opt.classList.remove('border-blue-600');
                        opt.classList.add('border-transparent');
                    });
                    
                    // Ajouter la classe active à l'option sélectionnée
                    this.classList.remove('border-transparent');
                    this.classList.add('border-blue-600');
                });
                
                colorOptions.appendChild(colorOption);
            });
        }
        
        // Configurer le bouton d'ajout au panier
        if (addToCartBtn) {
            addToCartBtn.onclick = function() {
                // Récupérer la quantité
                const quantityInput = document.getElementById('quantity');
                const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
                
                // Ajouter au panier
                window.swaggCart.addToCart(product.id, product.name, product.price, product.image, quantity);
            };
        }
        
        // Afficher les produits associés
        displayRelatedProducts(product);
    }
}

// Fonction pour afficher les produits associés
function displayRelatedProducts(currentProduct) {
    const relatedProductsContainer = document.getElementById('related-products');
    
    if (relatedProductsContainer && currentProduct.related) {
        // Vider le conteneur
        relatedProductsContainer.innerHTML = '';
        
        // Récupérer les produits associés
        const relatedProducts = products.filter(product => currentProduct.related.includes(product.id));
        
        // Afficher les produits associés
        relatedProducts.forEach(product => {
            const productCard = createProductCard(product);
            relatedProductsContainer.appendChild(productCard);
        });
    }
}

// Fonction pour configurer les filtres sur la page des produits
function setupFilters() {
    // Récupérer les paramètres de l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    // Afficher les produits filtrés par catégorie si nécessaire
    if (categoryParam) {
        displayProducts(categoryParam);
        
        // Mettre à jour le filtre de catégorie actif
        const categoryFilters = document.querySelectorAll('.category-filter');
        categoryFilters.forEach(filter => {
            if (filter.getAttribute('data-category') === categoryParam) {
                filter.classList.add('bg-blue-600', 'text-white');
                filter.classList.remove('bg-gray-200', 'text-gray-800');
            }
        });
    } else {
        displayProducts();
    }
    
    // Ajouter des événements de clic aux filtres de catégorie
    const categoryFilters = document.querySelectorAll('.category-filter');
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Mettre à jour l'URL
            const url = new URL(window.location);
            if (category) {
                url.searchParams.set('category', category);
            } else {
                url.searchParams.delete('category');
            }
            window.history.pushState({}, '', url);
            
            // Mettre à jour les filtres actifs
            categoryFilters.forEach(f => {
                f.classList.remove('bg-blue-600', 'text-white');
                f.classList.add('bg-gray-200', 'text-gray-800');
            });
            
            this.classList.remove('bg-gray-200', 'text-gray-800');
            this.classList.add('bg-blue-600', 'text-white');
            
            // Afficher les produits filtrés
            displayProducts(category);
        });
    });
}

// Fonction pour obtenir le nom de la catégorie
function getCategoryName(category) {
    switch (category) {
        case 'ordinateurs':
            return 'Ordinateurs';
        case 'composants':
            return 'Composants';
        case 'accessoires':
            return 'Accessoires';
        default:
            return 'Tous les produits';
    }
}

// Fonction pour obtenir la classe de couleur
function getColorClass(color) {
    switch (color.toLowerCase()) {
        case 'noir':
            return 'bg-gray-900';
        case 'blanc':
            return 'bg-white';
        case 'rouge':
            return 'bg-red-600';
        case 'bleu':
            return 'bg-blue-600';
        case 'vert':
            return 'bg-green-600';
        default:
            return 'bg-gray-500';
    }
}

// Initialiser les fonctions au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Afficher les produits en vedette sur la page d'accueil
    displayFeaturedProducts();
    
    // Configurer les filtres sur la page des produits
    setupFilters();
    
    // Afficher les détails du produit si on est sur la page de détail
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId) {
        displayProductDetails(productId);
    }
}); 