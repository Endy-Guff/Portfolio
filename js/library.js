SmoothScroll({
    animationTime : 800,
    stepSize : 75,
    accelerationDelta : 30,
    accelerationMax : 2,
    keyboardSupport : true,
    arrowScroll : 50,
    pulseAlgorithm : true,
    pulseScale : 4,
    pulseNormalize : 1,
    touchpadSupport : true,
    });

const currBtn = document.querySelector('.curr__btn');
currBtn.addEventListener('click', e =>{
    anime({
    targets: document.body,
    opacity: 0,
    duration: 500,
    easing: 'linear'
    })
    setTimeout(() =>{
    window.location.href = 'pages/calc-curr/index.html'
    }, 550)
})

const todoBtn = document.querySelector('.todo__btn');
todoBtn.addEventListener('click', e =>{
    anime({
    targets: document.body,
    opacity: 0,
    duration: 500,
    easing: 'linear'
    })
    setTimeout(() =>{
    window.location.href = 'pages/todo/index.html'
    }, 550)
})