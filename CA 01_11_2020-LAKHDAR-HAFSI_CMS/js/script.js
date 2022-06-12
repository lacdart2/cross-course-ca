/* const product = document.querySelector(".products");
const url = "https://www.kadercode.com/wp-json/wc/store/products";

async function fetchProducts() {
    try {

        const response = await fetch(url);
        const details = await response.json();
        console.log(details);

    } catch (error) {
        console.log("error : failed to call wordpress REST API ");
        product.innerHTML = `<p class="error">An error occurred when calling the API :( </p>`;
    }
  fetchProducts(); */

/**** TEST *****/

const products = document.querySelector(".products");
const url = "https://www.kadercode.com/wp-json/wc/store/products";

/* console.log(url); */

async function fetchProducts() {
    try {
        const response = await fetch(url);
        const details = await response.json();
        console.log(details);
        console.log(details[1].images[0].src);

        /* createHtml(details); */
        products.innerHTML = "";

        for (i = 0; i < details.length; i++) {
            console.log(details[i].images[0].id);

            products.innerHTML += `<a><div class="product">
            
            <h2 class="name">${details[i].name} </h2 > 
            <div class="image"><img src = ${details[i].images[0].src} /></div > 
            
            <P class="price"> price ${details[i].price_html}</p>
            <button class="view-btn"><a>View more</button></a><div></a>`;
        }
    } catch (error) {
        /*     details.forEach(function(detail) {
                                        products.innerHTML += `<a><div class="product">
                                        
                                        <h4 class="name">${detail.name} </h4 > 


                                        <p class="productP"> ${detail.description} </p>
                                         <p class="productP"> ${details[i].description} </p> 

                                        
                                        <P class="price"> price ${detail.price_html}</p><div></a>`;
                                    }); */
        console.log("error : failed to call wordpress REST API ");
        products.innerHTML = `<p>An error occurred when calling the API :( </p>`;
    }
}

fetchProducts();

/* function createHtml(details) {
    products.innerHTML = `<h1>${details.name}</h1>
                          <div class="details-description">${details.description}</div>
                                    /*   <img src ="${detail.permalink}"  alt=""/> 
                          <time class="details-date">Released: ${details.released}</time>`;
} */