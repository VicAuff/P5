// ---------------- Injection des IMG NAME et DESCRIPTION de l'API sur index.html

class Product {
  constructor(jsonProduct) {
    jsonProduct && Object.assign(this, jsonProduct); // Assignation d'object JSON
  }
}

const items = document.getElementById("items"); // Selectionne l'element section avec l'identifiant items

fetch("http://localhost:3000/api/products") // Recupere les donnees de l'API
  .then((res) => res.json()) // Convertit la réponse en JSON
  .then((product) => {
    for (let listProduct of product) {
      let products = new Product(listProduct);

      let link = document
        .querySelector("#items")
        .appendChild(document.createElement("a"));
      link.href = `./product.html?id=${products._id}`; // Envois vers page produit html en fonction de l'id

      let article = link.appendChild(document.createElement("article"));

      let img = article.appendChild(document.createElement("img"));
      img.src = `${products.imageUrl}`; // Injection de image dans la carte produit

      let name = article.appendChild(document.createElement("h3"));
      name.className = "productName";
      name.innerHTML = `${products.name}`; // Injection du name dans la carte produit

      let description = article.appendChild(document.createElement("p"));
      description.className = "productDescription";
      description.innerHTML = `${products.description}`; // Injection de description dans la carte produit
    }
  });

// ---------------- Injection des IMG NAME et DESCRIPTION de l'API sur index.html (fin boucle ok)

// ---------------- Injection des IMG NAME, DESCRIPTION, PRICE et COLORS de l'API sur product.html

const id = new URLSearchParams(window.location.search).get("id"); // Recuperation parametre id

fetch(`http://localhost:3000/api/products/${id}`) // Requete GET API pour la recup plus haut
  .then((res) => res.json()) // Convertit la réponse en JSON
  .then((product) => {
    document.querySelector("#title").innerHTML = product.name; // Injection dans HTML du name pour id title
    document.querySelector("#price").innerHTML = product.price; // Injection dans HTML du price pour id price
    document.querySelector("#description").innerHTML = product.description; // Injection dans HTML de description pour id description
    document.querySelector(
      ".item__img"
    ).innerHTML = `<img src="${product.imageUrl}" alt="${product.name}">`; // Injection dans HTML de img pour class item__img + alt

    //Insertion des couleurs

    for (let color of product.colors) {
      // Iteration API des object utilisant proprietes 'colors'

      let option = document.createElement("option"); // Declaration variable option
      option.value = color; // Affectation color data(value) API
      option.innerHTML = color; // Visibilite sur HTML des data(value) pour option
      document.querySelector("#colors").appendChild(option); // Injection des couleur dans la liste HTML id colors
    }
  });

// ---------------- Injection des IMG NAME, DESCRIPTION, PRICE et COLORS de l'API sur product.html (fin boucle ok)

/*
// Récupère les articles du panier depuis le stockage local
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// Récupère les données de l'API
fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  // .then((data) => {*/
