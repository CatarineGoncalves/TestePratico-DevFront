const track = document.querySelector('.carousel-track')
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carousel-button--right');
const prevButton = document.querySelector('.carousel-button--left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
// me da todas as caracteriticas 


// slides[0].style.left =  0 ;
// slides[1].style.left = slideWidth * 1 +'px';
// slides[2].style.left = slideWidth * 2 + 'px';
// all SAME

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition); 

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform =  'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

// slides.forEach((slide, index) => {
//     slide.style.left = slideWidth * index + 'px';
// }); 

// all slide i want

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}


prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
   
    updateDots(currentDot, prevDot)
    moveToSlide(track, currentSlide, prevSlide)
});




// console.log(slideSize)


// console.log(track) achou o tack e toda a informacao
// manipulacao do DOM
// 2 children 

// console.log(slides);

// clique para direita

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    //move to next slide
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
   
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot)
    //teste
    console.log(currentSlide)
});

// clique para esquerda



//quando clica na nav move para o slide que quiser.

//pontos de navegacao

dotsNav.addEventListener('click', e => {
    //indica qual esta clicando
    const targetDot = e.target.closest('button');
    // console.log(targetDot);
    
    if (!targetDot) return;
    
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot  === targetDot);
    // console.log(targetIndex)

    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide)
    updateDots(currentDot, targetDot);
   
});
