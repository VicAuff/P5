// Changement du titre de la page product.js en injection
document.querySelector("title").innerHTML = "Selection d'un Kanap";

const helper = new Helper();

// -----------Construction button acceuil
// Selectionne l'élément "article" et change sa position en "relative"
var article = document.querySelector("article");
article.style.position = "relative";

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

// Ajoute le bouton créé précédemment à l'élément "article"
var article = document.querySelector("article");
article.appendChild(homeButton);

// Ajoute un événement "click" sur le bouton "Retour accueil" pour rediriger vers la page d'accueil
var homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", function () {
  window.location.href = "./index.html";
});
// Fin de construction button acceuil------------

// Recuperation parametre id de l'URL avec URLSearchParams
const id = new URLSearchParams(window.location.search).get("id");

// Envoie d'une requête GET à l'API pour récupérer les détails du produit correspondant à l'id récupéré précédemment
fetch(`http://localhost:3000/api/products/${id}`)
  // Convertit la réponse de l'API en format JSON
  .then((res) => res.json())
  // Stockage des détails du produit dans une variable product
  .then((product) => {
    // Injection du nom du produit dans l'élément HTML ayant pour id "title"
    document.querySelector("#title").innerHTML = product.name;
    // Injection du prix du produit dans l'élément HTML ayant pour id "price"
    document.querySelector("#price").innerHTML = product.price;
    // Injection de la description du produit dans l'élément HTML ayant pour id "description"
    document.querySelector("#description").innerHTML = product.description;
    // Injection de l'image du produit dans l'élément HTML ayant pour class "item__img"
    document.querySelector(
      ".item__img"
    ).innerHTML = `<img src="${product.imageUrl}" alt="${product.name}">`;

    // Boucle sur les propriétés de couleur de l'objet produit récupéré de l'API
    for (let color of product.colors) {
      //Création d'une nouvelle option pour chaque propriété de couleur
      let option = document.createElement("option");
      // Affectation de la valeur de la propriété de couleur courante à l'option
      option.value = color;
      //Affectation de la visibilité de la propriété de couleur courante à l'option
      option.innerHTML = color;
      // Injection des options de couleur dans la liste HTML ayant pour id "colors"
      document.querySelector("#colors").appendChild(option);
    }

    var addToCart = document.querySelector("#addToCart");

    addToCart.onclick = (e) => {
      let color = document.querySelector("#colors");
      let quantity = document.querySelector("#quantity");
      const itemQuantity = document.querySelector("#quantity");

      if (
        itemQuantity.value < 1 ||
        itemQuantity.value > 100 ||
        color.value == false
      ) {
        helper.construcDivError(
          `Veuillez sélectionner une couleur et une quantité avant`,
          "#FF0000"
        );
        return;
      }

      let articlePanier = [];

      const save = {
        name: product.name,
        id: product._id,
        imageUrl: product.imageUrl,
        altTxt: product.altTxt,
        description: product.description,
        color: color.value,
        itemQuantity: quantity.value,
      };
      console.log(save);

      if (
        typeof localStorage != "undefined" &&
        localStorage.getItem("panier") != null
      ) {
        articlePanier = JSON.parse(localStorage.getItem("panier"));

        const findProduct = articlePanier.find(
          (product) => save.id === product.id && save.color === product.color
        );

        if (findProduct) {
          let numberOne = Number(findProduct.itemQuantity);
          let numberTwo = Number(parseInt(quantity.value));
          findProduct.itemQuantity = numberOne + numberTwo;

          localStorage.setItem("panier", JSON.stringify(articlePanier));
        } else {
          articlePanier.push(save);
          localStorage.setItem("panier", JSON.stringify(articlePanier));
        }
      } else {
        articlePanier.push(save);
        localStorage.setItem("panier", JSON.stringify(articlePanier));
      }

      helper.construcDivSucess(
        `Ajout au panier effectué avec succès, voulez vous continuer vos achats ?`,
        "#31F800"
      );
    };
  });
