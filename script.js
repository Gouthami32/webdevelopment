const pr=document.getElementById("products-container");
//dynamically generated  the elements from the server
const items = [
    { id: 1, name: "Smartphone", price: 14999 },
    { id: 2, name: "Laptop", price: 52999 },
    { id: 3, name: "Bluetooth Headphones", price: 1999 },
    { id: 4, name: "Smart Watch", price: 2999 },
    { id: 5, name: "Wireless Mouse", price: 499 }
  ];
  items.forEach(function(item){

    //it gone to each and everyone
    //const productrow=`
   // <div class="product">
    //<p>${item.name}-Rs.${item.price}</p>
    //<button>ADD TO CART</button>
    //</div>
   // `;
   // pr.insertAdjacentElement("beforeend",productrow);

   //another method

   const divelem=document.createElement('div');
   divelem.classname="product";
   divelem.innerHTML=`
   <p>${item.name}-Rs.${item.price}</p>
   <button onclick="addtocart()">ADD TO CART</button>`;
   pr.appendChild(divelem);
  });
  //destructuring 
  //it is useful in  foreach  we are defining like${} there we are define them 
  //every time to that this is best

  //const testbut=document.getElementById("testing");
  //testbut.addEventListener('click',function(){
   // console.log("click on teting button");
  //})
 // function test(val){
    ///console.log("clicked on testing button",val);
  //}
  function addtocart(){
    console.log("add to cart clicked");
  }
  


