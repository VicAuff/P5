// Changement du titre de la page cart.js en injection
document.querySelector("title").innerHTML = "Panier Kanap";

/*----Début d'intégration bouton "Retour acceuil" sur le panier.----*/

// Selectionne l'élément "section" et change sa position en "relative"
var section = document.querySelector("section");
section.style.position = "relative";

// Crée un bouton "Retour accueil" avec les propriétés suivantes
var homeButton = document.createElement("button");
homeButton.innerHTML = "Retour accueil";
homeButton.id = "home-button";
homeButton.style.position = "absolute";
homeButton.style.top = "6px";
homeButton.style.left = "5px";
homeButton.style.fontSize = "15px";
homeButton.style.borderRadius = "40px";
homeButton.style.padding = "8px 8px";
homeButton.style.border = "0";
homeButton.style.backgroundColor = "#2c3e50";
homeButton.style.color = "white";
homeButton.style.cursor = "pointer";
var section = document.querySelector("section");
section.appendChild(homeButton);

// Ajoute un événement "click" sur le bouton "Retour accueil" pour rediriger vers la page d'accueil
var homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", function () {
  window.location.href = "./index.html";
});

/*----Fin d'intégration bouton "Retour acceuil" sur le panier.----*/

/*----Début Local Storage---*/

// Récupère les articles du panier depuis le stockage local
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// Récupère les données de l'API
/*
fetch("http://localhost:3000/api/products")
.then((res) => res.json())
.then((data) => {
  document.querySelector("#title").innerHTML = data.name;
  document.querySelector("#price").innerHTML = data.price;
  document.querySelector("#quantity").innerHTML = data.quantity;
  console.log(quantity);
  document.querySelector("#colors").innerHTML = data.color;
  console.log(colors);
  return cartItems();
});*/
