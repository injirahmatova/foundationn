const foundation=document.querySelector("#newSec")

let db

function getAllProducts() {
    axios.get=("https://dummyjson.com/products").then((res)=> {
db=res.data.products;
db.forEach((item) =>{
    let box = document.createElement("div");
      box.className = "productCard";
      box.innerHTML = `
            <img
              src=${item.thumbnail}
              alt=""
              style="width:100%;height:100px"
            />
            <div class="cardDesc">
              <h3>${item.title}</h3>
              <p>${item.price}</p>
              <button class="cartBtn" onclick="addToCart(${item.id})">Sebete ekle</button>
            </div>
            `
            foundation.appendChild(box)
    });

  });
}
getAllProducts()