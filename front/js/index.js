// Changement du titre de la page index.js en injection
document.querySelector("title").innerHTML = "Accueil Kanap";

/*----Debut d'intégration des informations d'image, 
de nom et de description de l'API dans la page d'accueil index.html----*/

// Assignation des propriétés du produit à partir du JSON
class Product {
  constructor(jsonProduct) {
    // Assignation d'object JSON
    jsonProduct && Object.assign(this, jsonProduct);
  }
}

// Selectionne l'element avec l'id "items"
const items = document.getElementById("items");

// Récupère les données de l'API
fetch("http://localhost:3000/api/products")
  // Convertit la réponse en JSON
  .then((res) => res.json())
  .then((product) => {
    // Boucle sur chaque produit dans la réponse JSON
    for (let listProduct of product) {
      // Crée une nouvelle instance de la classe Product avec les données de chaque produit
      let products = new Product(listProduct);

      // Crée un lien pour chaque produit
      let link = document
        .querySelector("#items")
        .appendChild(document.createElement("a"));
      link.href = `./product.html?id=${products._id}`; // Envoie vers la page produit en fonction de l'id

      // Crée un élément "article" pour chaque produit
      let article = link.appendChild(document.createElement("article"));

      // Crée une image pour chaque produit
      let img = article.appendChild(document.createElement("img"));
      img.src = `${products.imageUrl}`; // Injecte l'image dans la carte produit

      // Crée un titre pour chaque produit
      let name = article.appendChild(document.createElement("h3"));
      name.className = "productName";
      name.innerHTML = `${products.name}`; // Injecte le nom dans la carte produit

      // Crée une description pour chaque produit
      let description = article.appendChild(document.createElement("p"));
      description.className = "productDescription";
      description.innerHTML = `${products.description}`; // Injecte la description dans la carte produit
    }
  });

/*----Fin d'intégration des informations d'image, 
de nom et de description de l'API dans la page d'accueil index.html----*/
