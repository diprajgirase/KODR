const products = [
  { name: "Laptop", price: 1200 },
  { name: "Headphones", price: 150 },
  { name: "Keyboard", price: 80 },
  { name: "Monitor", price: 300 },
  { name: "Mouse", price: 40 },
];

let inp = document.querySelector("input");

function showProducts(vals) {
  document.querySelector(".products").innerHTML = "";
  vals.forEach(function (product) {

    const card = document.createElement("div");
    card.className = "max-w-sm mt-10 bg-white rounded-lg shadow-md p-6";

    const title = document.createElement("h2");
    title.className = "text-xl font-semibold mb-2";
    title.textContent = product.name;

    const price = document.createElement("p");
    price.className = "text-gray-700 text-lg mb-4";
    price.textContent = "$" + product.price;

  
    const button = document.createElement("button");
    button.className =
      "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600";
    button.textContent = "Buy Now";

    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(button);

    document.querySelector(".products").appendChild(card);  
  });
}

showProducts(products);

inp.addEventListener("input", function () {
  let newarr = products.filter(function (pr) {
    return pr.name.toLowerCase().startsWith(inp.value.toLowerCase());
  });

  showProducts(newarr);
});
