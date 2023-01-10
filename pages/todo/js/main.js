function btnDisabled(btnStatus){
  const btn = document.querySelector('#addBtn');
  
  if(btnStatus){
    btn.setAttribute("disabled", "");
  } else{
    btn.removeAttribute("disabled");
  }
}

function selectorsAnimateShow(){
  let tl = anime.timeline();
  btnDisabled(true);
  tl.add({
    targets: '.notes__btn-box',
    rotate:{
      value: 360,
      duration: 3000
    },
    translateY:[
      {value: -5, duration: 200},
      {value: 0, duration: 1200},
    ]
  })
  .add({
    targets: '.notes__selectors',
    opacity: 1,
    top: 51,
    duration: 5000
  }, '-=3000')
  .add({
    targets: '.notes__selector--5',
    top: 160,
    duration: 10000
  }, '-=4500')
  .add({
    targets: '.notes__selector--4',
    top: 120,
    duration: 8000
  }, '-=9500')
  .add({
    targets: '.notes__selector--3',
    top: 80,
    duration: 6000
  }, '-=9000')
  .add({
    targets: '.notes__selector--2',
    top: 40,
    duration: 4000,
    complete: function(){
      btnDisabled(false);
    }
  }, '-=8500');
}

function selectorsAnimateHide(){
  let tl = anime.timeline();
  btnDisabled(true);
  tl.add({
    targets: '.notes__btn-box',
    rotate:{
      value: -360,
      duration: 3000
    },
    translateY:[
      {value: -5, duration: 200},
      {value: 0, duration: 1200},
    ],
  })
  .add({
    targets: '.notes__selector--2',
    top: 0,
    duration: 5000
  }, '-=3000')
  .add({
    targets: '.notes__selector--3',
    top: 0,
    duration: 5000
  }, '-=4800')
  .add({
    targets: '.notes__selector--4',
    top: 0,
    duration: 5000
  }, '-=4900')
  .add({
    targets: '.notes__selector--5',
    top: 0,
    duration: 5000
  }, '-=4900')
  .add({
    targets: '.notes__selectors',
    top: 0,
    opacity: {
      value: 0,
      duration: 300,
      delay: 250
    },
    duration: 5000,
    complete: function(){
      btnDisabled(false);
    }
  }, '-=4500');
}

function selectorsAnimate(){
  let status = 'inactive';
  document.querySelector('#addBtn').addEventListener('click', e => {

    if(status == 'inactive'){
      status = 'active';
      selectorsAnimateShow();
    } else if(status == 'active'){
      status = 'inactive';
      selectorsAnimateHide();
    }
  });
}

const listPoints = {
  1: ['M8 4C8 6.20914 6.20914 7.50003 4 7.50003C1.79086 7.50003 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C6.20914 0 8 1.79086 8 4Z', 'M97.5 5.50003C82.5 17.5 90.2091 25 88 25C85.7909 25 3.5 5.20915 3.5 3.00001C3.5 0.790871 64.5 6.00003 86.5 0.500027C90.5 -0.499973 100.5 3.10003 97.5 5.50003Z', 'M97.5 5.50003C82.5 17.5 90.2091 25 88 25C85.7909 25 86.5 15.2091 86.5 13C86.5 10.7909 87 7.00001 91 4.00001C94.2985 1.52615 100.5 3.10003 97.5 5.50003Z', '#EBF2A6'],
  2: ['M8 38C8 40.2091 6.20914 41.5 4 41.5C1.79086 41.5 0 40.2091 0 38C0 35.7909 1.79086 34 4 34C6.20914 34 8 35.7909 8 38Z', 'M97.5 5.50003C82.5 17.5 90.2091 25 88 25C85.7909 25 4 40.2092 4 38C4 35.7909 64.5 6.00003 86.5 0.500027C90.5 -0.499973 100.5 3.10003 97.5 5.50003Z', 'M97.5 5.50003C82.5 17.5 90.2091 25 88 25C85.7909 25 86.5 15.2091 86.5 13C86.5 10.7909 87 7.00001 91 4.00001C94.2985 1.52615 100.5 3.10003 97.5 5.50003Z', '#E09E7F'],
  3: ['M8 71C8 73.2091 6.20914 74.5 4 74.5C1.79086 74.5 0 73.2091 0 71C0 68.7909 1.79086 67 4 67C6.20914 67 8 68.7909 8 71Z', 'M97.5 5.50003C82.5 17.5 90.2091 25 88 25C85.7909 25 3.5 73.2091 3.5 71C3.5 68.7909 64.5 6.00003 86.5 0.500027C90.5 -0.499973 100.5 3.10003 97.5 5.50003Z', 'M97.5 5.50003C82.5 17.5 90.2091 25 88 25C85.7909 25 86.5 15.2091 86.5 13C86.5 10.7909 87 7.00001 91 4.00001C94.2985 1.52615 100.5 3.10003 97.5 5.50003Z', '#AA8FED'],
  4: ['M28 104C28 106.209 26.2091 107.5 24 107.5C21.7909 107.5 20 106.209 20 104C20 101.791 21.7909 100 24 100C26.2091 100 28 101.791 28 104Z', 'M117.5 5.50003C102.5 17.5 110.209 25 108 25C105.791 25 0 135.709 0 133.5C0 131.291 84.5 6.00003 106.5 0.500027C110.5 -0.499973 120.5 3.10003 117.5 5.50003Z', 'M117.5 5.50003C102.5 17.5 110.209 25 108 25C105.791 25 106.5 15.2091 106.5 13C106.5 10.7909 107 7.00001 111 4.00001C114.298 1.52615 120.5 3.10003 117.5 5.50003Z', '#80D3F5'],
  5: ['M14 104C14 106.209 12.2091 107.5 10 107.5C7.79086 107.5 6 106.209 6 104C6 101.791 7.79086 100 10 100C12.2091 100 14 101.791 14 104Z', 'M103.5 5.50003C88.5 17.5 96.2091 25 94 25C91.7909 25 0.5 154.709 0.5 152.5C0.5 150.291 70.5 6.00003 92.5 0.500027C96.5 -0.499973 106.5 3.10003 103.5 5.50003Z', 'M103.5 5.50003C88.5 17.5 96.2091 25 94 25C91.7909 25 92.5 15.2091 92.5 13C92.5 10.7909 93 7.00001 97 4.00001C100.298 1.52615 106.5 3.10003 103.5 5.50003Z', '#F5D18D']
};

const notes = document.querySelectorAll('.notes__selector');

notes.forEach(item =>{
  item.addEventListener('click', e =>{
    const parrentElement = document.querySelector('.wrapper__content-list');
    if(parrentElement.childElementCount < 8){
      const numSvg = e.target.dataset.num;
      generateContentItem(listPoints[numSvg], numSvg);
      animateContentItem(listPoints[numSvg], numSvg);
    } else{
      alert('Список переполнен!');
    }
    
  });
});

function generateContentItem(data, num){
  const inner = document.createElement('li');
  inner.classList.add('wrapper__content-item');
  inner.classList.add(`wrapper__content-item--${num}`);
  inner.innerHTML = `
    <svg width="271" height="190" viewBox="0 0 271 190" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="${data[0]}" fill="${data[3]}"/>
    </svg>
  `;
  const contentInner = document.createElement('div');
  contentInner.classList.add('wrapper__content-inner');
  contentInner.classList.add(`wrapper__content-inner--${num}`);
  const textArea = document.createElement('p');
  const btnDel = document.createElement('button');
  const btn = document.createElement('button');
  btnDel.classList.add('wrapper__btn');
  btn.classList.add('wrapper__btn');
  btn.classList.add('wrapper__btn--absolute');
  btnDel.innerHTML = `
    <img class="wrapper__btn-img--3" src="img/cross.svg">
  `;
  btn.innerHTML = `
    <img class="wrapper__btn-img--1" src="img/check.svg">
    <img class="wrapper__btn-img--2" src="img/pencil.svg">
  `;
  inner.append(contentInner);
  inner.append(btn);
  contentInner.append(textArea);
  const btnBox = document.createElement('div');
  btnBox.classList.add('wrapper__btn-box');
  contentInner.append(btnBox);
  btnBox.append(btnDel);
  let btnStatus = false;
  btn.addEventListener('click', e =>{
    if(btnStatus){
      btnStatus = false;
      animateBtn(btn.firstElementChild, btn.lastElementChild);
      btn.previousElementSibling.removeAttribute("contenteditable");
    } else{
      btnStatus = true;
      animateBtn(btn.lastElementChild, btn.firstElementChild);
      btn.previousElementSibling.setAttribute("contenteditable", "true");
      btn.previousElementSibling.focus();
    }
  });
  
  btnDel.addEventListener('click', e =>{
    document.querySelector('.wrapper__content-list').removeChild(inner);
  });


  document.querySelector('.wrapper__content-list').prepend(inner);
}

function animateBtn(selector1, selector2){
  anime({
    targets: selector1,
    easing: 'linear',
    scale: {
      value: 0,
      duration: 200
    },
    opacity: {
      value: 0,
      duration: 50,
      delay: 100
    },
  });
  setTimeout(() =>{
    selector1.style.display = 'none';
    selector2.style.display = 'block';
  }, 150);
  anime({
    targets: selector2,
    opacity: {
      value: 1,
      duration: 100,
    },
    scale: {
      value: 1,
      duration: 900,
      delay: 100
    }
  });
}

function animateContentItem(data, num){
  let tl = anime.timeline();
  tl.add({
    targets: '.wrapper__content-item svg path',
    d: [
    {value: `${data[1]}`, easing: 'linear', duration: 100},
    {value: `${data[2]}`, easing: 'linear', duration: 100},
    ],
    opacity:{
      value: 0,
      duration: 100,
      delay: 150
    }
  })
  .add({
    targets: `.wrapper__content-inner--${num}`,
    background: {
      value: `${data[3]}`, easing: 'linear', duration: 10
    },
    width: '100%',
    duration: 200,
    easing: 'easeOutBounce'
  }, '-=250');
}




selectorsAnimate();