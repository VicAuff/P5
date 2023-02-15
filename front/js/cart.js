// Changement du titre de la page cart.js en injection
document.querySelector("title").innerHTML = "Panier Kanap";

const helper = new Helper();

/*----Début d'intégration bouton "Retour acceuil" sur le panier.----*/

// Selectionne l'élément "section" et change sa position en "relative"
var section = document.querySelector("main");
section.style.position = "relative";

// Crée un bouton "Retour accueil" avec les propriétés suivantes ------ ça aussi Helper ultérieurement -------
var homeButton = document.createElement("button");
homeButton.innerHTML = "Retour accueil";
homeButton.id = "home-button";
homeButton.style.position = "absolute";
homeButton.style.top = "10px";
homeButton.style.left = "10px";
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

let panier = JSON.parse(localStorage.getItem("panier"));

if (panier === null || panier.length === 0) {
  helper.construcDivPanierVide(`Le panier est vide !`, "#2c3e50");
} else {
  fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => {
      let boucle = "";
      for (let article in panier) {
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
      document
        .querySelector("#cart__items")
        .insertAdjacentHTML("beforeend", boucle);

      let totalQuantity = 0;
      let totalPrice = 0;

      for (let article in panier) {
        totalQuantity += parseInt(panier[article].itemQuantity);
        totalPrice += panier[article].itemQuantity * data[article].price;
      }

      document.querySelector("#totalQuantity").textContent = totalQuantity;
      document.querySelector("#totalPrice").textContent = totalPrice;

      // Sélectionnez tous les éléments avec la class "deleteItem"
      const deleteButtons = document.querySelectorAll(".deleteItem");

      // Parcourir tous les boutons de suppression et ajouter un écouteur d'événements à chacun
      deleteButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          const productId = event.target.closest(".cart__item").dataset.id;
          const productColor =
            event.target.closest(".cart__item").dataset.color;
          const cartContent = JSON.parse(localStorage.getItem("panier"));

          // Retirer l'article du panier
          const updatedCart = cartContent.filter(
            (item) => item.id !== productId || item.color !== productColor
          );

          // Mettre à jour le localStorage avec le nouveau contenu du panier
          localStorage.setItem("panier", JSON.stringify(updatedCart));

          // Recharger la page pour mettre à jour l'affichage
          location.reload();
        });
      });

      // Parcourir toutes les quantités d'article et ajouter un écouteur d'événement à chacune
      const quantityInputs = document.querySelectorAll(".itemQuantity");

      quantityInputs.forEach((input) => {
        input.addEventListener("change", (event) => {
          const productId = event.target.closest(".cart__item").dataset.id;
          const productColor =
            event.target.closest(".cart__item").dataset.color;
          const cartContent = JSON.parse(localStorage.getItem("panier"));

          // Mettre à jour la quantité de l'article dans le panier
          const updatedCart = cartContent.map((item) => {
            if (item.id === productId && item.color === productColor) {
              item.itemQuantity = event.target.value;
            }
            return item;
          });

          // Mettre à jour le localStorage avec le nouveau contenu du panier
          localStorage.setItem("panier", JSON.stringify(updatedCart));

          // Recharger la page pour mettre à jour l'affichage
          location.reload();
        });
      });
    })
    .catch((error) => console.log(error));
}

let order = document.getElementById("order");
order.onclick = (e) => {
  e.preventDefault();
  /* ------------- déclaration des variables qui ce trouve dans le cart.html-------------- */

  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let address = document.getElementById("address");
  let city = document.getElementById("city");
  let email = document.getElementById("email");

  /* ------------- déclaration des regEx pour validation du formulaire -------------- */
  let regExName = /^[a-zA-Z-\s]+$/;
  let regExEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

  /* ------------- déclaration de l'objet contact qui sera envoyé dans la requête POST -------------- */
  let contact = {
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    city: city.value,
    email: email.value,
  };

  /* -------------Lancer la fonction de vérification-------------- */
  validationFormulaire();

  /* ------------- mettre cette fonction dans le helper ultérieurement-------------- */

  function validationFormulaire() {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let address = document.getElementById("address");
    let city = document.getElementById("city");
    let email = document.getElementById("email");
    let firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
    let lastNameErrorMsg = document.getElementById("lastNameErrorMsg");

    /* ------------- validation du prénom -------------- */
    if (firstName.value == "") {
      firstNameErrorMsg.innerHTML = "Ce champs est requis.";
      firstNameErrorMsg.style.color = "red";
    } else if (regExName.test(firstName.value) == false) {
      firstNameErrorMsg.innerHTML =
        "Les caractères saisis ne sont pas valides.";
      firstNameErrorMsg.style.color = "red";
    } else {
      firstNameErrorMsg.innerHTML = "";
    }

    /* ------------- validation du nom -------------- */
    if (lastName.value == "") {
      lastNameErrorMsg.innerHTML = "Ce champs est requis.";
      lastNameErrorMsg.style.color = "red";
    } else if (regExName.test(lastName.value) == false) {
      lastNameErrorMsg.innerHTML = "Les caractères saisis ne sont pas valides.";
      lastNameErrorMsg.style.color = "red";
    } else {
      lastNameErrorMsg.innerHTML = "";
    }

    /* ------------- validation de l'adresse -------------- */
    if (address.value == "") {
      addressErrorMsg.innerHTML = "Ce champs est requis.";
      addressErrorMsg.style.color = "red";
    } else {
      addressErrorMsg.innerHTML = "";
    }

    /* ------------- validation de la ville -------------- */
    if (city.value == "") {
      cityErrorMsg.innerHTML = "Ce champs est requis.";
      cityErrorMsg.style.color = "red";
    } else {
      cityErrorMsg.innerHTML = "";
    }

    /* ------------- validation de l'email -------------- */
    if (email.value == "") {
      emailErrorMsg.innerHTML = "Ce champs est requis.";
      emailErrorMsg.style.color = "red";
    } else if (regExEmail.test(email.value) == false) {
      emailErrorMsg.innerHTML = "Ceci n'est pas une adresse mail valide.";
      emailErrorMsg.style.color = "red";
    } else {
      emailErrorMsg.innerHTML = "";
    }
  }

  let orderButton = document.getElementById("order");
  orderButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Récupérer les valeurs des champs de saisie utilisateur
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let email = document.getElementById("email").value;

    // Créer l'objet de contact pour la requête POST
    let contact = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      email: email,
    };

    // Récupérer le contenu du panier dans le localStorage
    let cartContent = JSON.parse(localStorage.getItem("panier"));

    // Créer un tableau d'ID de produits à partir du contenu du panier
    let productIds = cartContent.map((item) => item.id);

    // Créer l'objet à envoyer dans la requête POST
    let data = {
      contact: contact,
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
      .then((response) => response.json())
      .then((data) => {
        // Rediriger l'utilisateur vers la page de confirmation de commande
        window.location.href = `confirmation.html?id=${data.orderId}`;
      })
      .catch((error) => console.error(error));
  });
};
