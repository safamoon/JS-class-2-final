let showBtn = document.querySelector(`.show`)
let inputField = document.querySelector(".password");


function togglePassword(){
   console.log(inputField.type)


if(inputField.type == `password`){
   inputField.type = `text`;
   showBtn.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`;
}else{
   inputField.type = ".password";
   showBtn.innerHTML = `<i class="bi bi-eye"></i>`;
}
}


showBtn.addEventListener(`click` , togglePassword,) 

//*-- IMAGE HOVER
let image = document.querySelector(`img`)

function toggleImage(){
   image.src = "./imges/image1.jpg";
}

image.addEventListener("mouseenter", toggleImage);

function prevImage(){
   image.src = "./imges/image2.jpg";

}

image.addEventListener("mouseout", prevImage);

//*priceslider--

let priceSlider = document.querySelector(`.price`);
let displayPrice = document.querySelector(`.displayPrice`);

function updatePrice(){
   console.log(priceSlider.value);
   displayPrice.innerHTML = priceSlider.value ;

}


priceSlider.addEventListener(`change`,updatePrice)