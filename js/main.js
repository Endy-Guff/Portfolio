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
function transformEye(eyeSelector, irisSelector, eyelidSelector, event){
  const element = document.querySelector(eyeSelector),
        iris = document.querySelector(irisSelector),
        eyelid = document.querySelector(eyelidSelector),
        position = element.getBoundingClientRect();
  let x = event.x - position.x;
  let y = event.y - position.y;

  element.style.transform = `translate(${x / 150}px, ${y / 220}px)`;
  iris.style.transform = `translate(${x / 150}px, ${y / 220}px)`;
  eyelid.style.transform = `translate(${x / 800}px, ${y / 800}px)`;
}

document.body.addEventListener('mousemove', e =>{
  transformEye('#left-eye', '#left-iris', '#left-eyelid', e);
  transformEye('#right-eye', '#right-iris', '#right-eyelid', e);
});

document.body.addEventListener('mousemove', e =>{
  const element = document.querySelector('#lips'),
        position = element.getBoundingClientRect();
  let x = e.x - position.x;
  let y = e.y - position.y;

  element.style.transform = `translate(${x / 800}px, ${y / 800}px)`;
});

document.body.addEventListener('mousemove', e =>{
  const element = document.querySelector('#face'),
        position = element.getBoundingClientRect();
  let x = e.x - (position.x + 180);
  let y = e.y - (position.y + 250);

  element.style.transform = `skew(${x / 500}deg, ${-y / 500}deg)`;
});

function faceLineAnimate(){
  anime({
    targets: '#line-1',
    strokeDasharray:{
      value: '278 278'
    },
    duration: 1500,
    easing: 'easeInOutCubic'
  });
  anime({
    targets: '#line-2',
    strokeDasharray:{
      value: '325 325'
    },
    duration: 1500,
    easing: 'easeInOutCubic'
  });
  anime({
    targets: '#line-3',
    strokeDasharray:{
      value: '162 162'
    },
    duration: 1500,
    easing: 'easeInOutCubic'
  });
  anime({
    targets: '#brow',
    strokeDasharray:{
      value: '109 45'
    },
    duration: 3000,
    easing: 'easeInOutCubic'
  });
}

function bgLineAnimate(){
  anime({
    targets: '#bg-line',
    strokeDashoffset: {
      value: '-150'
    },
    loop: true,
    duration: 5000,
    easing: 'linear'
  });
}

function spotAnimation(){
  anime({
    targets: '#spot-1 path',
    d: [
      {value: 'M82.6613 49.6098C91.5017 62.1362 54.6667 49.6098 27.8506 63.8841C-1.32279 74.9539 -2.50137 55.1447 1.91879 26.3048C6.60684 -4.28297 24.6092 1.83459 54.6667 13.7784C80.3902 24 73.8209 37.0833 82.6613 49.6098Z'},
      {value: 'M69.5 61.5C61.5 72.5 37.4999 81.5 27.8505 63.8841C14.0002 40.5 6.00029 50.4999 2.00025 22.9999C-2.454 -7.62277 42.8329 -3.44329 54.6665 13.7784C66.5001 31 77.5 50.5 69.5 61.5Z'}
    ],
    loop: true,
    easing: 'linear',
    duration: 10000
  });
  anime({
    targets: '#spot-2 path',
    d: [
      {value: 'M32 29C28 38 24 48.5 17 40C9.50003 27.5 3.51667e-06 32.5 1.50003 21.5C8.00003 5.49996 15.5 -0.500011 32 0.999958C47 3 37.5 14 32 29Z'},
      {value: 'M24.9999 26.9999C21 31.4999 18 27.4999 9.50002 32.9999C1.50004 41.4999 -0.499999 31 1.49995 21.4999C2.53851 16.5667 10.5 7 23.9999 11.9999C35 17.5 30 19.9999 24.9999 26.9999Z'}
    ],
    loop: true,
    easing: 'linear',
    duration: 10000
  });
}

const libraryBtn = document.querySelector('.library__btn');
libraryBtn.addEventListener('click', e =>{
  anime({
    targets: document.body,
    opacity: 0,
    duration: 500,
    easing: 'linear'
  })
  setTimeout(() =>{
    window.location.href = 'library.html'
  }, 550)
})

const layoutBtn = document.querySelector('.layout__btn');
layoutBtn.addEventListener('click', e =>{
  anime({
    targets: document.body,
    opacity: 0,
    duration: 500,
    easing: 'linear'
  })
  setTimeout(() =>{
    window.location.href = 'pages/layout/index.html'
  }, 550)
})

const kinoSearchBtn = document.querySelector('.kino-search__btn');
kinoSearchBtn.addEventListener('click', e =>{
  anime({
    targets: document.body,
    opacity: 0,
    duration: 500,
    easing: 'linear'
  })
  setTimeout(() =>{
    window.location.href = 'pages/kino-search/index.html'
  }, 550)
})

function tgIconAnimate(){
  const tgIcon = document.querySelector('#contactTg');
  const tl = anime.timeline({
    loop: true
  });
  tl.add({
    targets: tgIcon,
    translateX: 17,
    translateY: -17,
    duration: 500,
    easing: 'easeInBack',
    delay: 1000
  })
  .add({
    targets: tgIcon,
    opacity: 0,
    duration: 50
  })
  .add({
    targets: tgIcon,
    translateX: -20,
    translateY: 20,
    duration: 50
  })
  .add({
    targets: tgIcon,
    opacity: 1,
    duration: 50
  })
  .add({
    targets: tgIcon,
    translateX: 0,
    translateY: 0,
    duration: 300,
    easing: 'linear'
  })
}

function mailIconAnimate(){
  const mailCap = document.querySelector('#mailCap'),
        mailCap2 = document.querySelector('#mailCap2'),
        mailPaper = document.querySelector('#mailPaper');

  let tl = anime.timeline({
    easing: 'linear',
    loop: true
  });

  tl.add({
    targets: mailCap,
    d:[
      {value: 'M16.412 1.16745L2.44374 9.98551C1.88931 10.3355 1.84698 11.0694 2.35878 11.4702C2.79506 11.8118 3.35239 12 3.92817 12H30.0718C30.6476 12 31.205 11.8119 31.6412 11.4702C32.1527 11.0696 32.1111 10.3357 31.5563 9.98551L17.5879 1.16745C17.2343 0.944183 16.7656 0.944183 16.412 1.16745Z'}
    ],
    duration: 400,
    delay: 1000
  })
  .add({
    targets: mailCap2,
    duration:10,
    opacity: 0
  }, '-=250')
  .add({
    targets: mailPaper,
    translateY: -15,
    duration: 300
  })
  .add({
    targets: mailPaper,
    translateY: 0,
    duration: 300,
    delay: 1000
  })
  .add({
    targets: mailCap,
    d:[
      {value: 'M16.412 22.8325L2.44374 14.0145C1.88931 13.6645 1.84698 12.9306 2.35878 12.5298C2.79506 12.1882 3.35239 12 3.92817 12H30.0718C30.6476 12 31.205 12.1881 31.6412 12.5298C32.1527 12.9304 32.1111 13.6643 31.5563 14.0145L17.5879 22.8325C17.2343 23.0558 16.7656 23.0558 16.412 22.8325Z'}
    ],
    duration: 400,
  })
  .add({
    targets: mailCap2,
    duration: 10,
    opacity: 1
  }, '-=250')
}

function phoneIconAnimate(){
  const phone = document.querySelector('#phone');

  anime({
    targets: phone,
    rotate:[
      {value: -5},
      {value: 5},
      {value: 0},
    ],
    duration: 2000,
    loop: true,
    easing: 'linear'
  })
}


faceLineAnimate();
bgLineAnimate();
spotAnimation();
tgIconAnimate();
mailIconAnimate();
phoneIconAnimate();
