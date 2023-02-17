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
