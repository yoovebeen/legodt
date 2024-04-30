const menuTag = document.querySelector("nav a.menu")
const asideTag = document.querySelector("aside")
const wrapTag = document.querySelector("div.wrap")

menuTag.addEventListener("click", function(){

    asideTag.classList.toggle("open");
    wrapTag.classList.toggle("open");

    if(asideTag.classList.contains("open")){
    menuTag.innerHTML = '<img src="menu.png">';

    }else{
    menuTag.innerHTML = '<img src="menu.png">';
    }
})

const buttonTags = document.querySelectorAll("div.buttons div.button")
const imgTag = document.querySelector(".products img")

buttonTags[0].addEventListener("click", function(){
    console.log("button 1");
    imgTag.src = "vanilla cream.png"
})

buttonTags[1].addEventListener("click", function(){
    console.log("button 2");
    imgTag.src = "tangerine yellow.png"
})

buttonTags[2].addEventListener("click", function(){
    console.log("button 3");
    imgTag.src = "sweet pumpkin.png"
})

const newImages = ['image1.png', 'image2.png', 'image3.png'];

imgTag.addEventListener("mouseenter", function(){
    const currentIndex = newImages.indexOf(imgTag.src);
    const nextIndex = (currentIndex + 1) % newImages.length;
    imgTag.src = newImages[nextIndex];
});

imgTag.addEventListener("mouseleave", function(){
    const currentIndex = newImages.indexOf(imgTag.src);
    const nextIndex = (currentIndex + 1) % newImages.length; 
    imgTag.src = "vanilla cream.png"
});