// Changement du titre de la page cart.js en injection
document.querySelector("title").innerHTML = "Panier Kanap";

const helper = new Helper();

helper.addHomeButton();

// Récupère le contenu du panier enregistré dans le localStorage et le convertit en objet JavaScript
let panier = JSON.parse(localStorage.getItem("panier"));

// Vérifie si le panier est vide ou null
if (panier === null || panier.length === 0) {
  // Si le panier est vide, appelle la méthode construcDivPanierVide de l'objet helper pour construire un message à afficher
  helper.construcDivPanierVide("Le panier est vide !", "#2c3e50");
}
// Si le panier n'est pas vide, fait une requête fetch pour récupérer les informations des produits en utilisant l'API
else {
  fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => {
      // Déclare une variable boucle pour stocker les informations des articles dans le panier
      let boucle = "";
      for (let article in panier) {
        // Ajoute les informations de chaque article du panier à la variable boucle sous forme de HTML
        boucle += `
                <article class="cart__item" data-id="${panier[article].id}" data-color="${panier[article].color}">
                  <div class="cart__item__img">
                    <img src="${panier[article].imageUrl}" alt="${panier[article].altTxt}">
                  </div>
                  <div class="cart__item__content">
                    <div class="cart__item__content__description">
                      <h2>${panier[article].name}</h2>
                      <p>${panier[article].color}</p>
                      <p>${data[article].price} €</p>
                    </div>
                    <div class="cart__item__content__settings">
                      <div class="cart__item__content__settings__quantity">
                        <p>Qté : </p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${panier[article].itemQuantity}">
                      </div>
                      <div class="cart__item__content__settings__delete">
                        <p class="deleteItem">Supprimer</p>
                      </div>
                    </div>
                  </div>
                </article>
        `;
      }
      // Insère la variable boucle dans le HTML pour afficher les informations des articles du panier
      document
        .querySelector("#cart__items")
        .insertAdjacentHTML("beforeend", boucle);

      // Initialise les variables pour le nombre total d'articles et le prix total
      let totalQuantity = 0;
      let totalPrice = 0;

      // Boucle sur tous les articles du panier pour calculer le nombre total d'articles et le prix total
      for (let article in panier) {
        totalQuantity += parseInt(panier[article].itemQuantity);
        totalPrice += panier[article].itemQuantity * data[article].price;
      }

      // Met à jour les éléments HTML pour afficher le nombre total d'articles et le prix total
      document.querySelector("#totalQuantity").textContent = totalQuantity;
      document.querySelector("#totalPrice").textContent = totalPrice;

      // Sélectionne tous les éléments avec la classe "deleteItem"
      const deleteButtons = document.querySelectorAll(".deleteItem");

      // Boucle sur tous les boutons de suppression et ajoute un écouteur d'évenement
      deleteButtons.forEach((button) => {
        // Ajoute un écouteur d'événements sur le clic du bouton de suppression
        button.addEventListener("click", (event) => {
          // Récupère l'ID et la couleur de l'article à supprimer en parcourant la structure HTML pour trouver la balise la plus proche avec l'attribut "data-id" et "data-color"
          const productId = event.target.closest(".cart__item").dataset.id;
          const productColor =
            event.target.closest(".cart__item").dataset.color;
          const cartContent = JSON.parse(localStorage.getItem("panier"));

          // Retire l'article du panier en créant un nouveau tableau avec tous les articles sauf celui qui doit être supprimé
          const updatedCart = cartContent.filter(
            (item) => item.id !== productId || item.color !== productColor
          );

          // Met à jour le localStorage avec le nouveau contenu du panier
          localStorage.setItem("panier", JSON.stringify(updatedCart));

          // Recharge la page pour mettre à jour l'affichage du panier
          location.reload();
        });
      });

      // Boucle sur tous les champs de quantité d'article et ajoute un écouteur d'événement pour détecter les changements de quantité
      const quantityInputs = document.querySelectorAll(".itemQuantity");

      quantityInputs.forEach((input) => {
        // Ajoute un écouteur d'événements sur le changement de la quantité d'article
        input.addEventListener("change", (event) => {
          // Récupère l'ID et la couleur de l'article dont la quantité a changé en parcourant la structure HTML pour trouver la balise la plus proche avec l'attribut "data-id" et "data-color"
          const productId = event.target.closest(".cart__item").dataset.id;
          const productColor =
            event.target.closest(".cart__item").dataset.color;
          const cartContent = JSON.parse(localStorage.getItem("panier"));

          // Met à jour la quantité de l'article dans le panier
          const updatedCart = cartContent.map((item) => {
            if (item.id === productId && item.color === productColor) {
              item.itemQuantity = event.target.value;
            }
            return item;
          });

          // Met à jour le localStorage avec le nouveau contenu du panier
          localStorage.setItem("panier", JSON.stringify(updatedCart));

          // Recharge la page pour mettre à jour l'affichage du panier
          location.reload();
        });
      });
    })
    .catch((error) => console.log(error));
}

// Récupère l'élément d'entrée avec l'identifiant "firstName" du document HTML et l'assigne à la variable firstNameInput
const firstNameInput = document.getElementById("firstName");
// Récupère l'élément d'entrée avec l'identifiant "lastName" du document HTML et l'assigne à la variable lastNameInput
const lastNameInput = document.getElementById("lastName");
// Récupère l'élément d'entrée avec l'identifiant "address" du document HTML et l'assigne à la variable addressInput
const addressInput = document.getElementById("address");
// Récupère l'élément d'entrée avec l'identifiant "city" du document HTML et l'assigne à la variable cityInput
const cityInput = document.getElementById("city");
// Récupère l'élément d'entrée avec l'identifiant "email" du document HTML et l'assigne à la variable emailInput
const emailInput = document.getElementById("email");

// Définit l'expression régulière pour les noms
const regExName = /^[a-zA-Z-\s]+$/;
// Définit l'expression régulière pour les adresses e-mail
const regExEmail = /^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-]+[.]{1}[a-z]{2,10}$/;

// Récupère l'élément HTML pour afficher les messages d'erreur associés au champ "firstName" et l'assigne à la variable firstNameErrorMsg
const firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
// Récupère l'élément HTML pour afficher les messages d'erreur associés au champ "lastName" et l'assigne à la variable lastNameErrorMsg
const lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
// Récupère l'élément HTML pour afficher les messages d'erreur associés au champ "address" et l'assigne à la variable addressErrorMsg
const addressErrorMsg = document.getElementById("addressErrorMsg");
// Récupère l'élément HTML pour afficher les messages d'erreur associés au champ "city" et l'assigne à la variable cityErrorMsg
const cityErrorMsg = document.getElementById("cityErrorMsg");
// Récupère l'élément HTML pour afficher les messages d'erreur associés au champ "email" et l'assigne à la variable emailErrorMsg
const emailErrorMsg = document.getElementById("emailErrorMsg");

// Fonction de validation du formulaire
function validateForm() {
  let isValid = true;

  // Vérifie si le champ "firstName" est vide
  if (firstNameInput.value.trim() === "") {
    firstNameErrorMsg.classList.add("error");
    firstNameErrorMsg.innerHTML = "Ce champ est requis.";
    firstNameErrorMsg.style.color = "red";
    firstNameErrorMsg.style.fontWeight = "bold";
    isValid = false;
  }
  // Vérifie si le champ "firstName" contient des caractères invalides
  else if (!regExName.test(firstNameInput.value)) {
    firstNameErrorMsg.classList.add("error");
    firstNameErrorMsg.innerHTML = "Les caractères saisis ne sont pas valides.";
    firstNameErrorMsg.style.color = "red";
    firstNameErrorMsg.style.fontWeight = "bold";
    isValid = false;
  }
  // Si le champ "firstName" est valide, efface le message d'erreur
  else {
    firstNameErrorMsg.innerHTML = "";
  }
  // Vérifie si le champ "lastName" est vide
  if (lastNameInput.value.trim() === "") {
    lastNameErrorMsg.classList.add("error");
    lastNameErrorMsg.innerHTML = "Ce champ est requis.";
    lastNameErrorMsg.style.color = "red";
    lastNameErrorMsg.style.fontWeight = "bold";
    isValid = false;
  }
  // Vérifie si le champ "lastName" contient des caractères invalides
  else if (!regExName.test(lastNameInput.value)) {
    lastNameErrorMsg.classList.add("error");
    lastNameErrorMsg.innerHTML = "Les caractères saisis ne sont pas valides.";
    lastNameErrorMsg.style.color = "red";
    lastNameErrorMsg.style.fontWeight = "bold";
    isValid = false;
  }
  // Si le champ "lastName" est valide, efface le message d'erreur
  else {
    lastNameErrorMsg.innerHTML = "";
  }

  // Vérifie si le champ "address" est vide
  if (addressInput.value.trim() === "") {
    addressErrorMsg.innerHTML = "Ce champ est requis.";
    addressErrorMsg.classList.add("error");
    addressErrorMsg.style.color = "red";
    addressErrorMsg.style.fontWeight = "bold";
    isValid = false;
  }
  // Si le champ "address" est valide, efface le message d'erreur
  else {
    addressErrorMsg.innerHTML = "";
  }

  // Vérifie si le champ "city" est vide
  if (cityInput.value.trim() === "") {
    cityErrorMsg.innerHTML = "Ce champ est requis.";
    cityErrorMsg.classList.add("error");
    cityErrorMsg.style.color = "red";
    cityErrorMsg.style.fontWeight = "bold";
    isValid = false;
  }
  // Si le champ "city" est valide, efface le message d'erreur
  else {
    cityErrorMsg.innerHTML = "";
  }

  // Vérifie si le champ "email" est vide
  if (emailInput.value.trim() === "") {
    emailErrorMsg.innerHTML = "Ce champ est requis.";
    emailErrorMsg.classList.add("error");
    emailErrorMsg.style.color = "red";
    emailErrorMsg.style.fontWeight = "bold";
    isValid = false;
  }
  // Vérifie si le champ "email" contient une adresse email valide
  else if (!regExEmail.test(emailInput.value)) {
    emailErrorMsg.classList.add("error");
    emailErrorMsg.innerHTML = "Ceci n'est pas une adresse mail valide.";
    emailErrorMsg.style.color = "red";
    emailErrorMsg.style.fontWeight = "bold";
    isValid = false;
  }
  // Si le champ "email" est valide, efface le message d'erreur
  else {
    emailErrorMsg.innerHTML = "";
  }
  // Renvoie la validité du formulaire
  return isValid;
}

// Récupère le bouton "order" de la page HTML et ajoute un écouteur d'événement pour le clic, qui appelle la fonction validateForm
const orderButton = document.getElementById("order");

orderButton.addEventListener("click", function (event) {
  event.preventDefault();
  // Empêche la page de se recharger lorsqu'on clique sur le bouton "order"

  if (validateForm()) {
    // Récupérer le contenu du panier dans le localStorage
    const cartContent = JSON.parse(localStorage.getItem("panier"));

    // Créer un tableau d'ID de produits à partir du contenu du panier
    const productIds = cartContent.map((item) => item.id);

    // Créer l'objet à envoyer dans la requête POST
    const data = {
      contact: {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        address: addressInput.value,
        city: cityInput.value,
        email: emailInput.value,
      },
      products: productIds,
    };

    // Envoyer la requête POST avec les données de commande
    fetch("http://localhost:3000/api/products/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Une erreur est survenue lors de la requête.");
        }
        return response.json();
      })
      .then((data) => {
        // Rediriger l'utilisateur vers la page de confirmation de commande
        window.location.href = `confirmation.html?id=${data.orderId}`;
      })
      .catch((error) => {
        console.error(error);
        alert("Une erreur est survenue lors de l'envoi de la commande.");
      });
  }
});
