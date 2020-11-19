var instruments = [
 
  {
    name: "Recorder",
    type: "Wind Instrument",
    price: "$20",
    brand: "Yamaha",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1srETycRK3-pP6n4Qr6OiUdBsdNFSNPKGtOlkekYYGr9uUzR869kZDakW-38ylqQYnFV8CpBT&usqp=CAE"
  },
 
  {
    name: "Dean Razorback Guitar",
    type: "String Instrument",
    price: "$1,000",
    brand: "Fender",
    image:
      "https://images.reverb.com/image/upload/s--iZ-aQEgf--/f_auto,t_large/v1577815139/hq2o8vx7h1jouibkqmo7.jpg"
  },
 
  {
    name: "Clarinet",
    type: "Wind Instrument",
    price: "$150",
    brand: "Yamaha",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQwi76IJLopxfoPoKDcDJ3HM6ertOpRRUb1288LOPn_rfo160uRIbhawSpM6D6xUnhUZYY4P9Ds&usqp=CAE"
  },
  
  {
    name: "Trumpet",
    type: "Brass Instrument",
    price: "$150",
    brand: "Maton",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQMvHUtkJpFzS8Ln9q_92lLj0ua5wBSbpA3oX7LBNoVImvrzS0iYFmPDgUV5igXD8Hz3mqpnK8&usqp=CAE"
  },

  {
    name: "ESP Electric Guitar",
    type: "String Instrument",
    price: "$1,000",
    brand: "Fender",
    image: "https://c1.zzounds.com/media/productmedia/fit,600by800/quality,85/1_Full_Straight_Front_NA-cc3ebe80814dfd4a578678d0378eeb5e.jpg"
  },
  {
    name: "Ocarina",
    type: "Wind Instrument",
    price: "$50",
    brand: "Maton",
    image:
      "https://cdn.shopify.com/s/files/1/0103/7756/0119/products/12-hole-zelda-tenor-ocarina-special-edition-18_1296x.jpg?v=1570040239"
  }
];


function store() {
  var that = this;
  this.storeInstruments = [];
  this.cart = [];
  this.cartItems = 0;

  this.addInstrumentEle = document.createElement("button");
  this.inputPopUpEle = document.createElement("div");
  this.inputNameEle = document.createElement("input");
  this.selectBrandEle = document.createElement("select");
  this.option1Ele = document.createElement("option");
  this.option2Ele = document.createElement("option");
  this.option3Ele = document.createElement("option");
  this.inputTypeEle = document.createElement("input");
  this.submitInstrumentEle = document.createElement("button");

  this.cartItemsEle = document.createElement("h3");
  this.popUpEle = document.createElement("div");

  this.addInstrumentEle.innerHTML = "Add Instrument";
  this.option1Ele.innerHTML = "Fender";
  this.option2Ele.innerHTML = "Yamaha";
  this.option3Ele.innerHTML = "Maton";
  this.submitInstrumentEle.innerHTML = "Submit";

  this.cartItemsEle.innerHTML = "Cart: " + this.cartItems;

  this.addInstrumentEle.style.position = "absolute";
  this.addInstrumentEle.style.top = "5px";
  this.addInstrumentEle.style.left = "5px";
  this.inputNameEle.style.margin = "5px";
  this.selectBrandEle.style.margin = "5px";
  this.inputTypeEle.style.margin = "5px";
  this.submitInstrumentEle.style.margin = "5px";

  this.cartItemsEle.style.position = "absolute";
  this.cartItemsEle.style.top = "5px";
  this.cartItemsEle.style.right = "5px";

  this.inputPopUpEle.setAttribute("class", "inputPopUp");
  this.inputNameEle.setAttribute("placeholder", "Enter Instrument Name");
  this.inputTypeEle.setAttribute("placeholder", "Enter Instrument Type");

  this.popUpEle.setAttribute("class", "popUp");

  this.addInstrumentEle.addEventListener("click", function () {
    that.inputPopUpEle.style.visibility = "visible";
  });

  this.submitInstrumentEle.addEventListener("click", function () {
    instruments.push({
      name: that.inputNameEle.value,
      type: that.inputTypeEle.value,
      price: "$500",
      brand: that.selectBrandEle.value,
      image: ""
    });

    this.index = instruments.length - 1;
    that.storeInstruments.push(new instrument(instruments[this.index], that));
    that.inputPopUpEle.style.visibility = "hidden";
    that.inputNameEle.value = "";
    that.inputTypeEle.value = "";
  });

  this.cartItemsEle.addEventListener("click", function () {
    instruments.push(that.cart);
    console.log(instruments);
    that.renderInstruments(that.cart);
    that.cart = [];
    that.cartItems = 0;
    that.cartItemsEle.innerHTML = "Cart: " + that.cartItems;
  });

  this.renderInstruments(instruments);

  this.inputPopUpEle.appendChild(this.inputNameEle);
  this.selectBrandEle.appendChild(this.option1Ele);
  this.selectBrandEle.appendChild(this.option2Ele);
  this.selectBrandEle.appendChild(this.option3Ele);
  this.inputPopUpEle.appendChild(this.selectBrandEle);
  this.inputPopUpEle.appendChild(this.inputTypeEle);
  this.inputPopUpEle.appendChild(this.submitInstrumentEle);
  document.body.appendChild(this.inputPopUpEle);
  document.body.appendChild(this.addInstrumentEle);

  document.body.appendChild(this.popUpEle);
  document.body.appendChild(this.cartItemsEle);
}

store.prototype.renderInstruments = function (itemList) {
  var that = this;
  for (var i = 0; i < itemList.length; i++) {
    that.storeInstruments.push(new instrument(itemList[i], that));
  }
};

function instrument(item, parent) {
  var that = this;
  this.image = item.image;
  this.name = item.name;
  this.type = item.type;
  this.price = item.price;
  this.brand = item.brand;

  this.instrumentEle = document.createElement("div");
  this.imageEle = document.createElement("img");
  this.nameEle = document.createElement("div");
  this.typeEle = document.createElement("div");
  this.priceEle = document.createElement("div");
  this.brandEle = document.createElement("div");
  this.emptyEle = document.createElement("div");
  this.noImageEle = document.createElement("div");
  this.popUpEle = parent.popUpEle;

  this.cartButtonEle = document.createElement("button");
  this.cartButtonEle.innerHTML = "Add to Cart";
  this.cartButtonEle.style.margin = "5px";

  this.instrumentEle.setAttribute("class", "instrument");
  this.instrumentEle.style.display = "inherit";

  if (this.image == "") {
    this.noImageEle.innerHTML = "no-image";
  } else {
    this.imageEle.src = this.image;
  }
  this.nameEle.innerHTML = this.name;
  this.typeEle.innerHTML = this.type;
  this.priceEle.innerHTML = this.price;
  this.brandEle.innerHTML = this.brand;

  this.cartButtonEle.addEventListener("click", function () {
    that.instrumentEle.style.display = "none";
    parent.popUpEle.innerHTML = "This instrument was added to the cart:";
    this.index = instruments.indexOf(item);
    parent.storeInstruments.splice(this.index, 1);
    parent.cart.push(instruments.splice(this.index, 1));
    console.log(parent.cart);
    parent.cartItems = parent.cartItems + 1;
    parent.cartItemsEle.innerHTML = "Cart: " + parent.cartItems;
    if (instruments.length < 1) {
      that.emptyEle.innerHTML = "Store is empty";
      that.emptyEle.style.position = "absolute";
      that.emptyEle.style.top = "50%";
      that.emptyEle.style.left = "50%";
      document.body.appendChild(that.emptyEle);
    }
  });

  this.instrumentEle.addEventListener("mouseover", function () {
    if (that.brand == "Yamaha") {
      that.instrumentEle.style.backgroundColor = "green";
      that.instrumentEle.style.color = "white";
    } else if (that.brand == "Fender") {
      that.instrumentEle.style.backgroundColor = "maroon";
      that.instrumentEle.style.color = "white";
    } else if (that.brand == "Maton") {
      that.instrumentEle.style.backgroundColor = "navy";
      that.instrumentEle.style.color = "white";
    }
  });
  this.instrumentEle.addEventListener("mouseout", function () {
    that.instrumentEle.style.backgroundColor = "white";
    that.instrumentEle.style.color = "black";
  });

  this.instrumentEle.addEventListener("click", function () {
    parent.popUpEle.style.visibility = "visible";
    if (that.image == "") {
      parent.popUpEle.appendChild(that.noImageEle);
    } else {
      parent.popUpEle.appendChild(that.imageEle);
    }
    parent.popUpEle.appendChild(that.nameEle);
    parent.popUpEle.appendChild(that.typeEle);
    parent.popUpEle.appendChild(that.priceEle);
    parent.popUpEle.appendChild(that.brandEle);
    parent.popUpEle.appendChild(that.cartButtonEle);
  });
  this.popUpEle.addEventListener("click", function () {
    parent.popUpEle.style.visibility = "hidden";
    parent.popUpEle.innerHTML = "";
    if (that.image == "") {
      that.instrumentEle.appendChild(that.noImageEle);
    } else {
      that.instrumentEle.appendChild(that.imageEle);
    }
    that.instrumentEle.appendChild(that.nameEle);
    that.instrumentEle.appendChild(that.cartButtonEle);
    that.instrumentEle.style.backgroundColor = "white";
    that.instrumentEle.style.color = "black";
  });

  if (this.image == "") {
    this.instrumentEle.appendChild(this.noImageEle);
  } else {
    this.instrumentEle.appendChild(this.imageEle);
  }
  this.instrumentEle.appendChild(this.nameEle);
  this.instrumentEle.appendChild(this.cartButtonEle);
  document.body.appendChild(this.instrumentEle);
}

var store1 = new store();