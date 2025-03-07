// Main JavaScript for TechPro E-commerce

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Initialize cart from localStorage
    initializeCart();
    
    // Update cart count
    updateCartCount();
    
    // Add tech hover effects to buttons
    addTechEffects();
});

// Add tech hover effects to buttons and cards
function addTechEffects() {
    // Add pulse effect to featured products
    const featuredProducts = document.querySelectorAll('.product-card');
    featuredProducts.forEach((product, index) => {
        // Add a slight delay to each product for a staggered effect
        setTimeout(() => {
            product.classList.add('fade-in');
        }, index * 100);
    });
    
    // Add glow effect to primary buttons on hover
    const primaryButtons = document.querySelectorAll('.bg-blue-600');
    primaryButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('tech-glow');
        });
        button.addEventListener('mouseleave', function() {
            this.classList.remove('tech-glow');
        });
    });
}

// Cart functionality
let cart = [];

function initializeCart() {
    const savedCart = localStorage.getItem('techProCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function saveCart() {
    localStorage.setItem('techProCart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = itemCount;
        
        // Add pulse animation if cart has items
        if (itemCount > 0) {
            cartCountElement.classList.add('pulse');
        } else {
            cartCountElement.classList.remove('pulse');
        }
    }
}

function addToCart(productId, name, price, image, quantity = 1) {
    // Check if product already exists in cart
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    
    if (existingItemIndex !== -1) {
        // Update quantity if product already in cart
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Add new item to cart
        cart.push({
            id: productId,
            name: name,
            price: price,
            image: image,
            quantity: quantity
        });
    }
    
    // Save cart to localStorage
    saveCart();
    
    // Show notification
    showNotification(`${name} a été ajouté au panier`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function updateQuantity(productId, quantity) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        if (quantity <= 0) {
            // Remove item if quantity is 0 or negative
            removeFromCart(productId);
        } else {
            // Update quantity
            cart[itemIndex].quantity = quantity;
            saveCart();
        }
    }
}

function clearCart() {
    cart = [];
    saveCart();
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Notification system
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed bottom-4 right-4 px-6 py-3 rounded-md shadow-lg ${
        type === 'success' ? 'bg-blue-600' : 'bg-red-600'
    } text-white z-50 transform transition-all duration-500 translate-y-20 opacity-0`;
    
    // Add tech-styled content
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} mr-3 text-xl"></i>
            <p>${message}</p>
        </div>
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.remove('translate-y-20', 'opacity-0');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-y-20', 'opacity-0');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 3000);
}

// WhatsApp order functionality
function sendWhatsAppOrder(orderDetails) {
    const phoneNumber = '237679257080'; // MTN number
    
    // Format the message
    let message = `*Nouvelle commande de TechPro*\n\n`;
    message += `*Informations client:*\n`;
    message += `Nom: ${orderDetails.name}\n`;
    message += `Téléphone: ${orderDetails.phone}\n`;
    message += `Adresse: ${orderDetails.address}\n\n`;
    
    message += `*Date de livraison souhaitée:* ${orderDetails.deliveryDate}\n`;
    message += `*Heure de livraison souhaitée:* ${orderDetails.deliveryTime}\n\n`;
    
    message += `*Mode de paiement:* ${orderDetails.paymentMethod}\n`;
    if (orderDetails.paymentMethod === 'Orange Money' || orderDetails.paymentMethod === 'MTN Mobile Money') {
        message += `*Numéro de transaction:* ${orderDetails.transactionId || 'Non fourni'}\n\n`;
    }
    
    message += `*Produits commandés:*\n`;
    orderDetails.items.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - ${item.quantity} x ${item.price.toLocaleString()} FCFA\n`;
    });
    
    message += `\n*Total:* ${orderDetails.total.toLocaleString()} FCFA`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
}

// Export functions for use in other scripts
window.swaggCart = {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    sendWhatsAppOrder
}; 