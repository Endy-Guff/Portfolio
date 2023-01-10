const API_KEY = '6418b5bbd2a96c12fa79f37d';

const currency = [
  "AED",
  "AFN",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "ARS",
  "AUD",
  "AWG",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BRL",
  "BSD",
  "BTN",
  "BWP",
  "BYN",
  "BZD",
  "CAD",
  "CDF",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "CUP",
  "CVE",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "EGP",
  "ERN",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "FOK",
  "GBP",
  "GEL",
  "GGP",
  "GHS",
  "GIP",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "IMP",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JEP",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KID",
  "KMF",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRU",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MYR",
  "MZN",
  "NAD",
  "NGN",
  "NIO",
  "NOK",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SHP",
  "SLE",
  "SOS",
  "SRD",
  "SSP",
  "STN",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TVD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "USD",
  "UYU",
  "UZS",
  "VES",
  "VND",
  "VUV",
  "WST",
  "XAF",
  "XCD",
  "XDR",
  "XOF",
  "CFA",
  "XPF",
  "YER",
  "ZAR",
  "ZMW",
  "ZWL"
];


function showCurList(selector){
  const inputList = document.querySelector(selector);
  currency.forEach(item =>{
    const li = document.createElement('li');
    li.innerText = `${item}`;
    li.setAttribute("data-currency", '');
    li.setAttribute("data-cur", `${item}`);
    inputList.append(li);
  });
}

async function getCurrency(base, target){
  const resp = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${base}/${target}`)
       const data = await resp.json();
       console.log(data);

       showResult(data);
}


let curBase = '';
let curTarget = '';
const baseInput = document.querySelector('#input1');
const targetInput = document.querySelector('#input2');

function curSelect(){
  document.querySelector('#inputList1 .input__list').addEventListener('click', e =>{
    if(e.target.getAttribute('data-currency') == ''){
      curBase = e.target.getAttribute('data-cur');
      const selectCur = document.querySelector('#selectCur1');
      curAnimationСhange(selectCur);
      setInterval(() =>{
        selectCur.innerText = curBase;
      }, 100);
    }
  });

  document.querySelector('#inputList2 .input__list').addEventListener('click', e =>{
    if(e.target.getAttribute('data-currency') == ''){
      curTarget = e.target.getAttribute('data-cur');
      const selectCur = document.querySelector('#selectCur2');
      curAnimationСhange(selectCur);
      setInterval(() =>{
        selectCur.innerText = curTarget;
      }, 100);
    }
  });
}

curSelect();


document.querySelector('#btn').addEventListener('click', e =>{
  if(baseInput.value == '' || curBase == '' || curTarget == ''){
    return false
  } else{
    getCurrency(curBase, curTarget);
  }
});

function showResult(data){
  let result = baseInput.value * data.conversion_rate;
  targetInput.value = result.toFixed(2);
}

function curAnimationСhange(selector){
  anime({
    targets: selector,
    keyframes: [
      {opacity: 0.5, duration: 50},
      {scale: 0.3, duration: 50},
      {opacity: 1, duration: 100},
      {scale: 1, duration: 900}
    ],
  });
}

function snakeLine(){
  let current = null;
  btnColor = function(){
    document.querySelector('#btn').classList.add('focus');
  };
  btnColorHide = function(){
    document.querySelector('#btn').classList.remove('focus');
  }
  document.querySelector('#input1').addEventListener('focus', e =>{
    if (current) current.pause();
    btnColorHide();
      current = anime({
        targets: '.snake-line path',
        strokeDashoffset: {
          value: 0,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '325 1290',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
  });
  document.querySelector('#input2').addEventListener('focus', e =>{
    if(current) current.pause();
    btnColorHide();
    current = anime({
      targets: '.snake-line path',
        strokeDashoffset: {
          value: -526,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '325 1290',
          duration: 700,
          easing: 'easeOutQuart'
        }
    });
  });
  document.querySelector('#btn').addEventListener('click', e =>{
    if(current) current.pause();
    current = anime({
      targets: '.snake-line path',
        strokeDashoffset: {
          value: -1100,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '400 1290',
          duration: 700,
          easing: 'easeOutQuart'
        }
    });
    btnColor();
  });
}

function titleAnim(){
  anime({
    targets: '.title-img path',
    keyframes: [
      {strokeDasharray: '500 1000', duration: 40000},
    ],
    delay: 1000
  });
  setTimeout(() =>{
    document.querySelector('.title-img').classList.add('title-img--pink');
  }, 6000);
}

function startWindow(){
  document.querySelector('.wrapper').style.cssText = 'transform: scale(4);';
  anime({
    targets: '.wrapper',
    scale: 1,
    duration: 5000,
    easing: 'spring(1, 80, 10, 0)'
  });
  anime({
    targets: '.wrapper__inner',
    opacity: 1,
    duration: 5000,
    delay: 2000
  });
  anime({
    targets: '.snake-line path',
    opacity: 1,
    duration: 5000,
    delay: 2000
  });
}

function valuteListIcon(){
  let iconStatus1 = 'inactive';
  let iconStatus2 = 'inactive';
  function toPink(selector){
    document.querySelector(selector).style.cssText = 'fill: #FF00F5';
  }
  function removePink(selector){
    document.querySelector(selector).style.cssText = 'fill: #223041';
  }
  function animationShow(selector, selectorPath){
      toPink(selectorPath);
      anime({
        targets: selector,
        keyframes: [
          {rotate: 180},
          {scale: 1.5}
        ],
        duration: 250,
        easing: 'linear'
      });
    }
  function animationHide(selector, selectorPath){
      removePink(selectorPath);
      anime({
        targets: selector,
        keyframes: [
          {rotate: 0},
          {scale: 1}
        ],
        duration: 250,
        easing: 'linear'
      });
    }
    function animationListShow(inputBx, inputList){
      const inputBox = document.querySelector(inputBx);
      const list = document.querySelector(inputList);
      const track = document.createElement('div');
      track.classList.add('input__box-track');
      track.innerHTML = `
        <svg width="38" height="88" viewBox="0 0 38 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.1893 41.9356C31.1893 41.9356 27.1894 -1.56442 14.6894 9.93558C2.18935 21.4356 8.68935 83.4356 8.68935 83.4356" stroke="#FF00F5" stroke-linecap="round"/>
        </svg>
      `;
      inputBox.append(track);
      list.style.cssText = 'display: block; transform: scale(0)';
      anime({
        targets: '.input__box-track svg',
        keyframes: [
          {strokeDashoffset: -130, duration: 350, easing: 'linear'},
          {opacity: 0, duration: 1, easing: 'linear'}
        ],
      });
      anime({
        targets: list,
        keyframes:[
          {opacity: 1, duration: 100, easing: 'linear'},
          {scale: 1, duration: 500, easing: 'easeOutBack'}
        ],
        delay: 100
      });
      setTimeout(() =>{
        track.remove();
      }, 1000);
    }
    function animationListHide(inputList){
      const list = document.querySelector(inputList);
      anime({
        targets: list,
        keyframes:[
          {scale: 0, duration: 50, easing: 'linear'},
          {opacity: 0, duration: 100, easing: 'linear'}
        ],
      });
      list.style.cssText = 'display: block';
    }

  document.querySelector('#inputIcon1').addEventListener('click', e =>{
    if(iconStatus1 == 'inactive'){
      iconStatus1 = 'active';
      showCurList('#inputList1 .input__list');
      animationShow('#inputIcon1', '#inputIcon1 path');
      animationListShow('#inputBox1', '#inputList1');
    } else if(iconStatus1 == 'active'){
      iconStatus1 = 'inactive';
      animationHide('#inputIcon1', '#inputIcon1 path');
      animationListHide('#inputList1');
    }
  });
  document.querySelector('#inputIcon2').addEventListener('click', e =>{
    if(iconStatus2 == 'inactive'){
      iconStatus2 = 'active';
      showCurList('#inputList2 .input__list');
      animationShow('#inputIcon2', '#inputIcon2 path');
      animationListShow('#inputBox2', '#inputList2');
    } else if(iconStatus2 == 'active'){
      iconStatus2 = 'inactive';
      animationHide('#inputIcon2', '#inputIcon2 path');
      animationListHide('#inputList2');
    }
  });
  document.querySelector('#inputList1 .input__list').addEventListener('click', e =>{
    if(e.target.getAttribute('data-currency') == ''){
      iconStatus1 = 'inactive';
      animationHide('#inputIcon1', '#inputIcon1 path');
      animationListHide('#inputList1');
    }
  });
  document.querySelector('#inputList2 .input__list').addEventListener('click', e =>{
    if(e.target.getAttribute('data-currency') == ''){
      iconStatus2 = 'inactive';
      animationHide('#inputIcon2', '#inputIcon2 path');
      animationListHide('#inputList2');
    }
  });
}

valuteListIcon();
startWindow();
titleAnim();
snakeLine();


