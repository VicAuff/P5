// Changement du titre de la page product.js en injection
document.querySelector("title").innerHTML = "Selection d'un Kanap";

// ----Début intégration des IMG, NAME, DESCRIPTION, PRICE et COLORS de l'API sur product.html----*/

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
  });

/*----Fin d'intégration des IMG, NAME, DESCRIPTION, PRICE et COLORS de l'API sur product.html----*/

/*----Début d'intégration bouton "Retour acceuil" sur la page produit, lié à l'image du produit.----*/

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

/*----Fin d'intégration bouton "Retour acceuil" sur la page produit, lié à l'image du produit.----*/

/*----Début de vérification sélection couleur et quantité utilisateur,
avant de poursuivre vers le panier.----*/

// Ajoute un événement "click" au bouton "Ajouter au panier"
addToCart.onclick = (e) => {
  // Récupère la sélection de la couleur
  const colorSelect = document.querySelector("#colors");
  // Récupère la quantité sélectionnée
  const itemQuantity = document.querySelector("#quantity");
  // Récupère la couleur sélectionnée
  const color = colorSelect.options[colorSelect.selectedIndex];

  // Vérifie si une couleur et une quantité ont été sélectionnées
  if (color && itemQuantity)
    if (itemQuantity.value >= 1 && itemQuantity.value <= 100) {
      // Vérifie si la quantité sélectionnée est entre 1 et 100
      // Crée une div pour afficher un message de succès
      const divSucess = document.createElement("div");
      divSucess.innerHTML = `Ajout au panier effectuer avec succès`;
      divSucess.classList.add("alert-success");
      // Ajoute la div au DOM
      document.querySelector("main").appendChild(divSucess);

      // Récupère l'élément "main" pour ajouter des styles
      var main = document.querySelector("main");
      main.style.position = "relative";

      // Ajoute des styles à la div
      divSucess.style.background = "#31F800";
      divSucess.style.color = "black";
      divSucess.style.fontWeight = "bold";
      divSucess.textAlign = "center";
      divSucess.style.borderRadius = "20px";
      divSucess.style.padding = "5px";
      divSucess.style.position = "absolute";
      divSucess.style.left = "50%";
      divSucess.style.top = "50%";
      divSucess.style.transform = "translate(-50%, -50%)";
      divSucess.style.zIndex = "1";

      // Désactiver la sélection de quantité et de couleur pour éviter les ajouts excessifs
      itemQuantity.setAttribute("disabled", true);
      colorSelect.setAttribute("disabled", true);

      // Rediriger vers la page panier
      window.location.href = "./cart.html";
    } else {
      // Créer un élément div pour afficher un message d'erreur
      const divError = document.createElement("div");
      // Ajouter le message d'erreur à l'élément div
      divError.innerHTML = `Veuillez sélectionner une couleur et une quantité avant`;
      // Ajouter une classe pour styliser l'élément
      divError.classList.add("alert-success");
      // Ajouter l'élément div à la page
      document.querySelector("main").appendChild(divError);

      // Récupère l'élément "main" pour ajouter des styles
      var main = document.querySelector("main");
      main.style.position = "relative";

      // Ajoute des styles à la div
      divError.style.background = "#FF0000";
      divError.style.color = "black";
      divError.style.fontWeight = "bold";
      divError.style.textAlign = "center";
      divError.style.borderRadius = "20px";
      divError.style.padding = "5px";
      divError.style.position = "absolute";
      divError.style.left = "50%";
      divError.style.top = "50%";
      divError.style.transform = "translate(-50%, -50%)";
      divError.style.zIndex = "1";
    }
};

/*----Fin de vérification sélection couleur et quantité utilisateur,
avant de poursuivre vers le panier.----*/
