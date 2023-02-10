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

let panier = JSON.parse(localStorage.getItem("panier"));

if (panier === null || panier.length === 0) {
  // div panier vide creer function
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

  /* ------------- déclaration de l'objet contact-------------- */
  const contact = {
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    city: city.value,
    email: email.value,
  };

  /* -------------Lancer la fonction de vérification -------------- */
  validationFormulaire();

  /* ------------- mettre cette fonction dans le heiper -------------- */

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
  // pour la suite
};
