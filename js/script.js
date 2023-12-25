fetch("https://s3.amazonaws.com/open-to-cors/assignment.json").then((data)=>{
   return data.json();
}).then((objectdata)=>{
   let tableData = "";
   let productsArray = [];
   for(var productID in objectdata.products){
    var productDetails = objectdata.products[productID];

    productsArray.push({
        id: productID,
        subcategory: productDetails.subcategory,
        title: productDetails.title,
        price: productDetails.price,
        popularity:productDetails.popularity,
      });

   }

   productsArray.sort((a, b) => b.popularity - a.popularity);
   for (var i = 0; i < productsArray.length; i++) {
    var product = productsArray[i];
    tableData += `<tr>
      <td>${product.id}</td>
      <td>${product.subcategory}</td>
      <td>${product.title}</td>
      <td>${product.price}</td>
      <td>${product.popularity}</td>
    </tr>`;
  }

   document.getElementById("table_body").innerHTML = tableData;
});

