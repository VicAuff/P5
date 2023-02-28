class Helper {
  constructor() {}
  construcDivError(string, color) {
    const divError = document.createElement("div");
    // Ajouter le message d'erreur à l'élément div
    divError.innerHTML = string;

    // Ajouter l'élément div à la page
    document.querySelector("main").appendChild(divError);

    // Récupère l'élément "main" pour ajouter des styles
    var main = document.querySelector("main");
    main.style.position = "relative";

    // Ajoute des styles à la div
    divError.style.background = color;
    divError.style.color = "black";
    divError.style.fontWeight = "bold";
    divError.style.textAlign = "center";
    divError.style.borderRadius = "20px";
    divError.style.padding = "5px";
    divError.style.position = "absolute";
    divError.style.position = "fixed";
    divError.style.left = "50%";
    divError.style.top = "50%";
    divError.style.transform = "translate(-50%, -50%)";
    divError.style.zIndex = "1";
    divError.style.boxShadow = "3px 3px 3px rgba(0, 0, 0, 0.30)";
    return divError;
  }
  construcDivSucess(string, color) {
    const divSucess = document.createElement("div");
    divSucess.innerHTML = `${string} <br><button id="btnYes">Continuer 😁</button> <button id="btnNo">Go panier 🛒</button>`;

    // Ajoute la div au DOM
    document.querySelector("main").appendChild(divSucess);

    // Ajoute des styles aux boutons "Oui" et "Non"
    const btnYes = document.getElementById("btnYes");
    const btnNo = document.getElementById("btnNo");

    btnYes.style.marginRight = "10px";
    btnYes.style.borderRadius = " 20px";
    btnYes.style.backgroundColor = "#2c3e50";
    btnYes.style.color = "white";
    btnYes.style.fontWeight = "bold";
    btnYes.style.marginTop = "10px";
    btnYes.style.marginBottom = "10px";
    btnYes.style.fontSize = "18px";
    btnYes.style.alignItems = "center";
    btnYes.style.border = "none";
    btnYes.style.padding = "8px";
    btnYes.style.boxShadow = "1.5px 1.5px 1.5px rgba(0, 0, 0, 0.20)";
    btnYes.style.cursor = "pointer";

    btnNo.style.marginLeft = "10px";
    btnNo.style.padding = "8px";
    btnNo.style.borderRadius = " 20px";
    btnNo.style.backgroundColor = "#2c3e50";
    btnNo.style.color = "white";
    btnNo.style.fontWeight = "bold";
    btnNo.style.marginTop = "10px";
    btnNo.style.marginBottom = "10px";
    btnNo.style.fontSize = "18px";
    btnNo.style.alignItems = "center";
    btnNo.style.border = "none";
    btnNo.style.boxShadow = "1.5px 1.5px 1.5px rgba(0, 0, 0, 0.20)";
    btnNo.style.cursor = "pointer";

    // Ajoute des événements aux boutons
    btnYes.addEventListener("click", function () {
      window.location.href = "index.html";
    });

    btnNo.addEventListener("click", function () {
      window.location.href = "cart.html";
    });

    // Récupère l'élément "main" pour ajouter des styles
    const main = document.querySelector("main");
    main.style.position = "relative";

    // Ajoute des styles à la div
    divSucess.style.background = "#237AB5";
    divSucess.style.color = "black";
    divSucess.style.border = "1.5px solid #2c3e50";
    divSucess.style.fontWeight = "bold";
    divSucess.style.textAlign = "center";
    divSucess.style.borderRadius = "20px";
    divSucess.style.padding = "5px";
    divSucess.style.position = "absolute";
    divSucess.style.position = "fixed";
    divSucess.style.left = "50%";
    divSucess.style.top = "50%";
    divSucess.style.transform = "translate(-50%, -50%)";
    divSucess.style.boxShadow = "3px 3px 3px rgba(0, 0, 0, 0.30)";
    divSucess.style.zIndex = "1";
    return divSucess;
  }
  construcDivPanierVide(string, color) {
    const divPanierVide = document.createElement("div");
    // Ajouter le message d'erreur à l'élément div
    divPanierVide.innerHTML = string;

    // Ajouter l'élément div à la page
    document.querySelector("main").appendChild(divPanierVide);

    // Récupère l'élément "main" pour ajouter des styles
    var main = document.querySelector("main");
    main.style.position = "relative";

    // Ajoute des styles à la div
    divPanierVide.style.background = color;
    divPanierVide.style.color = "white";
    divPanierVide.style.fontWeight = "bold";
    divPanierVide.style.textAlign = "center";
    divPanierVide.style.borderRadius = "20px";
    divPanierVide.style.padding = "7px";
    divPanierVide.style.position = "absolute";
    divPanierVide.style.left = "50%";
    divPanierVide.style.top = "23%";
    divPanierVide.style.transform = "translate(-50%, -50%)";
    divPanierVide.style.zIndex = "1";
    divPanierVide.style.boxShadow = "3px 3px 3px rgba(0, 0, 0, 0.30)";
    return divPanierVide;
  }
  addHomeButton() {
    // Sélectionne l'élément "section" et change sa position en "relative"
    const section = document.querySelector("main");
    section.style.position = "relative";

    // Crée un bouton "Retour accueil" avec les propriétés suivantes
    const homeButton = document.createElement("button");
    homeButton.innerHTML = "Accueil";
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
    homeButton.style.boxShadow = "1.5px 1.5px 1.5px rgba(0, 0, 0, 0.20)";
    homeButton.style.fontWeight = "bold";

    // Ajoute le bouton à la section
    section.appendChild(homeButton);

    // Ajoute un événement "click" sur le bouton "Retour accueil" pour rediriger vers la page d'accueil
    homeButton.addEventListener("click", function () {
      window.location.href = "./index.html";
    });
  }
  addHomeButtonToProduct() {
    // Sélectionne l'élément "article" et change sa position en "relative"
    const article = document.querySelector("article");
    article.style.position = "relative";

    // Crée un bouton "Retour accueil" avec les propriétés suivantes
    const homeButton = document.createElement("button");
    homeButton.innerHTML = "Accueil";
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
    homeButton.style.boxShadow = "1.5px 1.5px 1.5px rgba(0, 0, 0, 0.20)";
    homeButton.style.fontWeight = "bold";

    // Ajoute le bouton au "article"
    article.appendChild(homeButton);

    // Ajoute un événement "click" sur le bouton "Retour accueil" pour rediriger vers la page d'accueil
    homeButton.addEventListener("click", function () {
      window.location.href = "./index.html";
    });
  }
  validateForm() {
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
      firstNameErrorMsg.innerHTML =
        "Les caractères saisis ne sont pas valides.";
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
  countProducts() {
    // Récupère le contenu du panier enregistré dans le localStorage
    const cartItems = localStorage.getItem("panier");

    // Crée un élément HTML span pour afficher le nombre d'articles dans le panier
    const cartCount = document.createElement("span");

    // Ajoute une classe CSS à l'élément span
    cartCount.className = "cart-count";

    // Ajoute un style CSS pour mettre en gras le nombre d'articles dans le panier
    cartCount.style.fontWeight = "bold";
    cartCount.style.background = "#2c3e50";
    cartCount.style.borderRadius = "20px";
    cartCount.style.color = "white";
    cartCount.style.padding = "7px";
    cartCount.style.textAlign = "center";
    cartCount.style.boxShadow = "3px 3px 3px rgba(0, 0, 0, 0.30)";

    // Vérifie si le panier est vide
    if (cartItems === null) {
      // Si le panier est vide, affiche le nombre d'articles comme étant égal à 0
      cartCount.textContent = "0";
    } else {
      // Si le panier n'est pas vide, calcule le nombre total d'articles dans le panier
      const items = JSON.parse(cartItems);
      let count = 0;
      items.forEach((item) => {
        count += parseInt(item.itemQuantity);
      });
      // Met à jour le contenu de l'élément span avec le nombre total d'articles dans le panier
      cartCount.textContent = count;
    }

    // Sélectionne l'élément HTML qui contient le lien vers la page du panier
    const cartLink = document.querySelector('a[href="./cart.html"] li');

    // Met à jour le contenu du lien pour afficher le mot "Panier" suivi du nombre d'articles dans le panier
    cartLink.innerHTML = "Panier ";
    cartLink.appendChild(cartCount);
  }
  generateId() {
    // Récupérer l'ID de commande à partir de l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get("id");

    // Mettre à jour le texte du span orderId avec l'ID de commande
    const spanOrder = document.getElementById("orderId");
    spanOrder.textContent = orderId;

    // Ajouter le style CSS pour la couleur sur le texte
    spanOrder.style.background = "green";
    spanOrder.style.borderRadius = "5px";
    spanOrder.style.padding = "2px";
    spanOrder.style.color = "#ffffff";

    // Supprimer le contenu du localStorage
    localStorage.removeItem("panier");
  }
}
