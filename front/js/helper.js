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
    divError.style.left = "50%";
    divError.style.top = "50%";
    divError.style.transform = "translate(-50%, -50%)";
    divError.style.zIndex = "1";
    return divError;
  }
  construcDivSucess(string, color) {
    const divSucess = document.createElement("div");
    divSucess.innerHTML = string;

    // Ajoute la div au DOM
    document.querySelector("main").appendChild(divSucess);

    divSucess.innerHTML = `${string} <br><button id="btnYes">Oui</button> <button id="btnNo">Non</button>`;

    document.getElementById("btnYes").addEventListener("click", function () {
      window.location.href = "index.html";
    });

    document.getElementById("btnNo").addEventListener("click", function () {
      window.location.href = "cart.html";
    });

    // Récupère l'élément "main" pour ajouter des styles
    var main = document.querySelector("main");
    main.style.position = "relative";

    // Ajoute des styles à la div
    divSucess.style.background = color;
    divSucess.style.color = "black";
    divSucess.style.fontWeight = "bold";
    divSucess.style.textAlign = "center";
    divSucess.style.borderRadius = "20px";
    divSucess.style.padding = "5px";
    divSucess.style.position = "absolute";
    divSucess.style.left = "50%";
    divSucess.style.top = "50%";
    divSucess.style.transform = "translate(-50%, -50%)";
    divSucess.style.zIndex = "1";
    return divSucess;
  }
  construcDivPanierVide(string, color){
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
    return divPanierVide;
  }
}
