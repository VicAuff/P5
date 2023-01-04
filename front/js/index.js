// ----------------Injection des IMG API sur index.html

class Product{
    constructor(jsonProduct){
        jsonProduct && Object.assign(this, jsonProduct);
}}

const items = document.getElementById("items"); // Selectionne l'element section avec l'identifiant items

fetch("http://localhost:3000/api/products") // Recupere les donnees de l'API
  .then((res) => res.json()) // Convertit la réponse en JSON
  .then((product) => {
    for (let listProduct of product){
        let products = new Product(listProduct);
        const imgElement = document.createElement("img");
        imgElement.src = products.imageUrl;
        items.appendChild(imgElement);
    }
});

// ----------------Injection des IMG API sur index.html

