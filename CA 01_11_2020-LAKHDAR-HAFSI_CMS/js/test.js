 /* const url = "https://www.kadercode.com/wp-json/"; 
      const urlProducts = "https://www.kadercode.com/wp-json/wc/store/products";

      async function fetchProducts() {
          try {
              const response = await fetch(urlProducts);
              const details = await response.json();
           

              productsList.innerHTML = "";
           

                     details.forEach(function(detail) {
                          productsList.innerHTML += `<div class="product"> <h2>${details[i].name}</h2>
                                                     <p>${details[i].description} </p>
                                                     <p>${details[i].price} </p></div>`;
                      });
                 for (i = 0; i < details.length; i++) {
                                  console.log(details[i].description);

                                  productsList.innerHTML += `<div class="product"> <h2>${details[i].name}</h2>
                                                             <p>${details[i].description} </p>
                                                             <p>${details[i].price} </p></div>`;
                              }
          } catch (error) {
              console.log("error : failed to call wordpress REST API ");
              productsList.innerHTML = `<p class="error">An error occurred when calling the API :( </p>`;
          }
      }
      fetchProducts();