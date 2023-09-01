import { arrowLeft, arrowRight } from "./svgExport.js";

// GLOBAL
let isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

const imageOne = document.querySelector('.img__div ');
const imageTwo = document.querySelector('.img__div__2');

if(isMobile){
    imageOne.style.backgroundAttachment = 'scroll'
    imageTwo.style.backgroundAttachment = 'scroll'
}

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
    // alert(arrowLeft)
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


// Animate on scroll

let options = {
    rootMargin: "0px",
    threshold: .5,
  };

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      // Each entry describes an intersection change for one observed
    
        if(entry.isIntersecting){
            entry.target.classList.add('reveal')
        }

    });
  };
  
  let observer = new IntersectionObserver(callback, options);

  [...document.querySelectorAll('.observe')].forEach(el => {
    observer.observe(el)
  });

  setTimeout(() => {
    [...document.querySelectorAll('.hero_observe')].forEach((el, idx) => {
        setTimeout(() => {
            el.classList.add('reveal')
        }, (idx + 1) * 500)
       
    })
  },500)
 