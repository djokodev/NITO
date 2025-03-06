# TechPro E-commerce Website

Un site e-commerce moderne et performant pour TechPro, spécialisé dans la vente d'ordinateurs, composants électroniques et accessoires gaming.

## Fonctionnalités

- **Design moderne et responsive** : Interface utilisateur tech/gaming adaptée à tous les appareils
- **Présentation des produits** : Mise en valeur des produits high-tech avec images, descriptions détaillées et spécifications techniques
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
- Animations et effets visuels personnalisés

## Structure du projet

```
techpro/
├── index.html              # Page d'accueil
├── css/
│   └── styles.css          # Styles personnalisés
├── js/
│   ├── main.js             # Fonctionnalités principales
│   └── products.js         # Gestion des produits
├── images/                 # Images du site et des produits
│   ├── logo.jpg
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

Exemple de structure d'un produit :
```javascript
{
    id: 13,
    name: "Nom du produit",
    price: 150000,
    description: "Description détaillée du produit avec spécifications techniques.",
    image: "URL de l'image",
    category: "ordinateurs", // ou "composants" ou "accessoires"
    featured: false,
    new: true,
    colors: ["Noir", "Blanc"],
    sizes: [],
    related: [5, 6, 11] // IDs des produits associés
}
```

### Modifier les informations de contact

Les informations de contact peuvent être modifiées dans les sections footer de chaque page HTML.

### Changer les couleurs du thème

Le thème utilise principalement des couleurs bleues (blue-600) et des dégradés de gris foncé pour l'identité visuelle tech/gaming. Pour modifier ces couleurs, recherchez les classes Tailwind correspondantes dans les fichiers HTML et CSS.

## Auteur

Développé pour TechPro - Touossido Djoko Teresa Dalvina

## Licence

Tous droits réservés © 2023 TechPro 