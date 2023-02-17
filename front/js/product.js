// Changement du titre de la page product.js en injection
document.querySelector("title").innerHTML = "Selection d'un Kanap";

const helper = new Helper();

helper.addHomeButtonToProduct();

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

    // Sélectionne le bouton "Ajouter au panier"
    var addToCart = document.querySelector("#addToCart");

    // Ajoute un écouteur d'événement "click" sur le bouton "Ajouter au panier"
    addToCart.onclick = (e) => {
      // Récupère les éléments "color" et "quantity" du formulaire
      let color = document.querySelector("#colors");
      let quantity = document.querySelector("#quantity");

      // Récupère l'élément "quantity" du formulaire
      const itemQuantity = document.querySelector("#quantity");

      // Vérifie si la quantité est valide et si une couleur a été sélectionnée
      if (
        itemQuantity.value < 1 ||
        itemQuantity.value > 100 ||
        color.value == false
      ) {
        // Si la quantité ou la couleur ne sont pas valides, affiche un message d'erreur
        helper.construcDivError(
          `Veuillez sélectionner une couleur et une quantité avant`,
          "#FF0000"
        );
        return;
      }

      let articlePanier = [];

      // Crée un objet "save" avec les informations du produit sélectionné
      const save = {
        name: product.name,
        id: product._id,
        imageUrl: product.imageUrl,
        altTxt: product.altTxt,
        description: product.description,
        color: color.value,
        itemQuantity: quantity.value,
      };

      // Vérifie si le localStorage existe et si un panier a déjà été créé
      if (
        typeof localStorage != "undefined" &&
        localStorage.getItem("panier") != null
      ) {
        // Si un panier existe déjà, récupère son contenu dans la variable "articlePanier"
        articlePanier = JSON.parse(localStorage.getItem("panier"));

        // Recherche si le produit sélectionné est déjà présent dans le panier
        const findProduct = articlePanier.find(
          (product) => save.id === product.id && save.color === product.color
        );

        // Si le produit est déjà présent dans le panier, met à jour sa quantité
        if (findProduct) {
          let numberOne = Number(findProduct.itemQuantity);
          let numberTwo = Number(parseInt(quantity.value));
          findProduct.itemQuantity = numberOne + numberTwo;

          // Met à jour le contenu du panier dans le localStorage
          localStorage.setItem("panier", JSON.stringify(articlePanier));
        } else {
          // Si le produit n'est pas présent dans le panier, l'ajoute à la fin
          articlePanier.push(save);
          localStorage.setItem("panier", JSON.stringify(articlePanier));
        }
      } else {
        // Si aucun panier n'existe, crée un nouveau panier avec le produit sélectionné
        articlePanier.push(save);
        localStorage.setItem("panier", JSON.stringify(articlePanier));
      }

      // Affiche un message de succès à l'utilisateur
      helper.construcDivSucess(
        `Ajout au panier effectué avec succès, voulez vous continuer vos achats ?`,
        "#31F800"
      );
    };
  });
