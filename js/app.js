import { arrowLeft, arrowRight } from "./svgExport.js";

// GLOBAL
const mouse = document.querySelector('.mouse');
window.addEventListener('mousemove', (e) => {
    mouse.style.transform = `translate3d(${e.clientX - 25}px, ${e.clientY - 25}px, 0)`;
})
const mobileMenu = document.querySelector('.mobile__menu');
const mobileLinks = [...document.querySelectorAll('.mobile__link')];
const menuToggle = document.querySelector('.menu__toggle');
const menuClose = document.querySelector('.menu__close');

menuToggle.addEventListener('click', () => mobileMenu.classList.add('active'));
menuClose.addEventListener('click', () => mobileMenu.classList.remove('active'))
mobileLinks.forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('active'))
})


// HEADER
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
})

// HERO

const hero = document.getElementById('hero');
const imageIndicators = [...document.querySelectorAll('.img__indicator')];

let timeOut;
let image = 1;
function changeHeroImage(img){
    if(img){
        image = img
    }else{
        image++
        if(image == 5) image = 1;
    }
    
    for(let i = 0; i < imageIndicators.length; i++){
        if(imageIndicators[i].classList.contains(image)){
            imageIndicators[i].classList.add('active');
        }else{
            imageIndicators[i].classList.remove('active');
        }
    }

    hero.style.backgroundImage = `url(./assets/images/Hero/${image}.webp)`;

    timeOut = setTimeout(()=> {
        changeHeroImage()
    }, 5000)
}

timeOut = setTimeout(() => {
    changeHeroImage()
}, 5000);

imageIndicators.forEach(i => {
    i.addEventListener('click', () => {
        let index = +i.classList[1];
        clearTimeout(timeOut);
        changeHeroImage(index);
    })
})

// PORTFOLIO

// image slider
const imageslider = document.querySelector('.image__slider');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

if(window.innerWidth <= 650){
    leftBtn.innerHTML = arrowLeft
    rightBtn.innerHTML = arrowRight
}else{
    leftBtn.innerHTML = ''
    rightBtn.innerHTML = ''
}

let imageIndex = 0;
let imageWidth;
let animating = false;

const sliderImages = [...document.querySelectorAll('.slider__image__wrapper')]
function cloneImages(imagesArray, numberOfClones){   
    for( let i = 0; i < numberOfClones; i++){
        imagesArray.forEach(image => {
            let clone = image.cloneNode(true);
            imageslider.appendChild(clone)
        });
    }
    imageWidth = imagesArray[0].getBoundingClientRect().width;
    imageslider.style.transform = `translateX(-${(imageWidth * 8) + imageIndex }px)`
}

cloneImages(sliderImages, 2);

window.addEventListener('resize', () => {
    imageslider.style.transition = '0s';
    setTimeout(() => {
        imageslider.style.transition = '0.5s';
    }, 100)
    imageWidth = sliderImages[0].getBoundingClientRect().width;
    imageslider.style.transform = `translateX(-${(imageWidth * 8) + (imageWidth * imageIndex) }px)`
    if(window.innerWidth <= 650){
        leftBtn.innerHTML = arrowLeft
        rightBtn.innerHTML = arrowRight
    }else{
        leftBtn.innerHTML = ''
        rightBtn.innerHTML = ''
    }
})

function navigateSlider(direction){
  
    if(!animating){
        animating = true;
        if(direction === 'LEFT'){        
            imageslider.style.transform = `translateX(-${((imageWidth * 8) + (imageWidth * imageIndex)) - (imageWidth)}px)`
            imageIndex--;
            reset()
        }
    
        if(direction === 'RIGHT'){
            imageslider.style.transform = `translateX(-${((imageWidth * 8) + (imageWidth * imageIndex)) + (imageWidth)}px)`
            imageIndex++;
            reset()
        }
    }

    function reset(){
        setTimeout(() => {
            imageslider.style.transition = '0s';
            imageIndex = imageIndex < 0 ? 7 : imageIndex;
            imageIndex = imageIndex > 7 ? 0 : imageIndex;
            imageslider.style.transform = `translateX(-${((imageWidth * 8) + (imageWidth * imageIndex))}px)`
            setTimeout(() => {
                imageslider.style.transition = '0.5s';
                animating = false
            },100)
        },500)
    }
}
leftBtn.addEventListener('click', () => navigateSlider('LEFT'));
rightBtn.addEventListener('click',() => navigateSlider('RIGHT'));

leftBtn.addEventListener('mouseover', applyMouseActive);
rightBtn.addEventListener('mouseover', applyMouseActive);
leftBtn.addEventListener('mouseleave', removeMouseActive);
rightBtn.addEventListener('mouseleave',  removeMouseActive);

function applyMouseActive(){
    if(this.classList.contains('left')){
        mouse.innerHTML = arrowLeft;
    }else if(this.classList.contains('right')){
        mouse.innerHTML = arrowRight;
    }
    mouse.classList.add('active');
}

function removeMouseActive(){
     mouse.classList.remove('active');
 }
 

 // Testimonials
const testimonalIndicatorPanel = document.querySelector('.testimonial__indicator__panel');
let testimonialIndicators = [];
let testimonials = [...document.querySelectorAll('.testimonial')];
let testimonialIdx = 0;

let testimonialInterval = setInterval(cycleTestimonials, 10000);

testimonials.forEach((t, idx) => {
    let indicator = document.createElement('div');
    indicator.classList.add('testimonial__indicator');
   
    testimonalIndicatorPanel.appendChild(indicator);
    testimonialIndicators.push(indicator);
    indicator.addEventListener('click', () => {
        clearInterval(testimonialInterval)
        testimonialInterval = setInterval(cycleTestimonials, 10000);
        testimonialIdx = idx;
        setTestimonialActive()
    })
 })

 function cycleTestimonials(){
    testimonialIdx++;
    if(testimonialIdx >= testimonials.length) testimonialIdx = 0;
    setTestimonialActive()
 }

 setTestimonialActive()

 function setTestimonialActive(){
    for(let i = 0; i < testimonials.length; i++){
        if(i !== testimonialIdx){
            testimonials[i].classList.remove('active');
            testimonialIndicators[i].classList.remove('active');    
        }else{
            setTimeout(() => {
                testimonials[i].classList.add('active');
                testimonialIndicators[i].classList.add('active');
            }, 200)
        }
    }
 }


 // FAQ


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
