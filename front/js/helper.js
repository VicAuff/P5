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
    divSucess.innerHTML = `${string} <br><button id="btnYes">Retour accueil</button> <button id="btnNo">Allez au panier</button>`;

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
    btnYes.style.padding = "5px";
    btnYes.style.boxShadow = "1.5px 1.5px 1.5px rgba(0, 0, 0, 0.20)";
    btnYes.style.cursor = "pointer";

    btnNo.style.marginLeft = "10px";
    btnNo.style.padding = "5px";
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
    divSucess.style.background = color;
    divSucess.style.color = "black";
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
    homeButton.style.boxShadow = "1.5px 1.5px 1.5px rgba(0, 0, 0, 0.20)";

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
    homeButton.style.boxShadow = "1.5px 1.5px 1.5px rgba(0, 0, 0, 0.20)";

    // Ajoute le bouton au "article"
    article.appendChild(homeButton);

    // Ajoute un événement "click" sur le bouton "Retour accueil" pour rediriger vers la page d'accueil
    homeButton.addEventListener("click", function () {
      window.location.href = "./index.html";
    });
  }
}
