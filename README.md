# Swagg E-commerce Website

Un site e-commerce moderne et élégant pour la boutique Swagg, spécialisée dans les vêtements et accessoires pour femmes.

## Fonctionnalités

- **Design moderne et responsive** : Interface utilisateur élégante et adaptée à tous les appareils
- **Présentation des produits** : Mise en valeur des produits avec images, descriptions et options
- **Panier d'achat** : Ajout, modification et suppression de produits dans le panier
- **Système de commande** : Processus de commande simple avec options de livraison
- **Options de paiement multiples** : 
  - Orange Money (694 938 602 - Touossido Djoko Teresa Dalvina)
  - MTN Mobile Money (679 257 080 - Touossido Djoko Teresa Dalvina)
  - Paiement à la livraison
- **Planification de livraison** : Choix de la date, heure et lieu de livraison
- **Confirmation par WhatsApp** : Envoi automatique des détails de commande au propriétaire via WhatsApp

## Technologies utilisées

- HTML5
- CSS3 avec Tailwind CSS
- JavaScript (Vanilla JS)
- Font Awesome pour les icônes
- LocalStorage pour la gestion du panier

## Structure du projet

```
swagg-teresa/
├── index.html              # Page d'accueil
├── css/
│   └── styles.css          # Styles personnalisés
├── js/
│   ├── main.js             # Fonctionnalités principales
│   └── products.js         # Gestion des produits
├── images/                 # Images du site et des produits
│   ├── logo.png
│   ├── hero-image.jpg
│   ├── products/
│   └── ...
└── pages/
    ├── products.html       # Page de liste des produits
    ├── product-detail.html # Page de détail d'un produit
    ├── cart.html           # Page du panier
    ├── about.html          # Page à propos
    └── contact.html        # Page de contact
```

## Installation et déploiement

1. Clonez ce dépôt sur votre serveur web ou hébergement
2. Assurez-vous que tous les fichiers sont correctement transférés
3. Accédez au site via votre navigateur

Aucune installation supplémentaire n'est nécessaire car le site utilise des CDN pour Tailwind CSS et Font Awesome.

## Personnalisation

### Ajouter des produits

Pour ajouter de nouveaux produits, modifiez le fichier `js/products.js` en ajoutant de nouvelles entrées au tableau `products`.

### Modifier les informations de contact

Les informations de contact peuvent être modifiées dans les sections footer de chaque page HTML.

### Changer les couleurs du thème

Le thème utilise principalement des couleurs roses (pink-600) pour l'identité visuelle. Pour modifier ces couleurs, recherchez les classes Tailwind correspondantes dans les fichiers HTML.

## Auteur

Développé pour Swagg - Touossido Djoko Teresa Dalvina

## Licence

Tous droits réservés © 2023 Swagg 