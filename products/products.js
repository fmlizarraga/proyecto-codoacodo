const productListHTML = document.getElementById("prodlist");
const apiURL = "https://fakestoreapi.com/";
// Productos
const getAllProducts = async () => {
    try {
        const res = await fetch(apiURL + 'products')
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

getAllProducts().then(
    products => {
        console.log(products)
        const productsHTML = products.map(item => `
            <article class="product" id="art${item.id}">
                <div class="prod-rating">
                    <span class"stars">${item.rating.rate}</span>
                    <i class="fa-solid fa-star fa-sm" style="color: #1a5fb4;"></i>
                    <span>(${item.rating.count})</span>
                </div>
                <h2 class="prod-title" >${item.title}</h2>
                <span class="prod-category" >${item.category}</span>
                <img src="${item.image}" alt="${item.title} class="prod-picture">
                <p class="prod-desc" >${item.description}</p>
                <span class="prod-price" >$${item.price}</span>
            </article>
            `
            )
            productsHTML.forEach(element => {
                productListHTML.innerHTML += element;
            });
    }
);
