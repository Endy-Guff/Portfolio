const btns = document.querySelectorAll('.calc__btn-item'),
      clearBtn = document.querySelector('[data-btn="c"]'),
      screenValue = document.querySelector('.calc__screen-value'),
      checkBox = document.querySelector('.calc__checkbox');

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'],
      operators = ['+', '-', '*', '/'];

let btnKey1 = '';
let btnKey2 = '';
let operator = '';
let result = '';
let finish = false;


function clearAll(){
    btnKey1 = '';
    btnKey2 = '';
    operator = '';
    result = '';
    screenValue.textContent = '0'
}

clearBtn.addEventListener('click', () =>{
    clearAll();
})

function init(keyValue, key){
    if(numbers.includes(keyValue)){
        if(btnKey2 == '' && operator == ''){
            btnKey1 += keyValue;
            console.log(btnKey1, operator, btnKey2);
            screenValue.textContent = btnKey1;
        } else if(btnKey1 !== '' && btnKey2 !== '' && finish){
            btnKey2 = keyValue;
            finish = false;
            screenValue.textContent = btnKey2;
        } else {
            btnKey2 += keyValue;
            console.log(btnKey1, operator, btnKey2);
            screenValue.textContent = btnKey2;
        }
    };

    if(operators.includes(keyValue)){
        if(operator == ''){
            operator += keyValue;
            console.log(btnKey1, operator, btnKey2);
            screenValue.textContent = key.textContent;
        } else{
            operator = '';
            operator += keyValue;
            console.log(btnKey1, operator, btnKey2);
            screenValue.textContent = key.textContent;
        }
        
    }

    if(keyValue == '=' || keyValue == 'Enter'){
        if       (operator == '+'){
            btnKey1 = +btnKey1 + (+btnKey2);
        } else if(operator == '-'){
            btnKey1 = +btnKey1 - (+btnKey2);
        } else if(operator == '*'){
            btnKey1 = +btnKey1 * (+btnKey2);
        } else if(operator == '/'){
            btnKey1 = +btnKey1 / (+btnKey2);
        }
        finish = true;
        screenValue.textContent = btnKey1;
    }


    if(btnKey1.length > 7){
        btnKey1 = btnKey1.substring(0, 7);
    }
    if(btnKey2.length > 7){
        btnKey2 = btnKey2.substring(0, 7);
    }

}

function buttonIdentifier(){
    
    btns.forEach(key =>{
        key.addEventListener('click', () =>{

            init(key.dataset.btn, key);
            
        })
    })
};

window.addEventListener('keydown', e =>{
    function addClassActive(key){
        if(e.key == 'Delete'){
            delBtn.classList.add('active');
        setTimeout(() => {
            delBtn.classList.remove('active');
        }, 150);
        } else if(e.key == 'Enter'){
            enterBtn.classList.add('active');
            setTimeout(() => {
            enterBtn.classList.remove('active');
            }, 150);
        } else{
            key.classList.add('active');
        setTimeout(() => {
            key.classList.remove('active');
        }, 150);
        }
    }
    init(e.key, e);
    if(e.key == 'Delete'){
        clearAll();
    }

    const clickedBtn = document.querySelector(`[data-btn="${e.key}"]`),
          delBtn = document.querySelector('[data-btn="c"]'),
          enterBtn = document.querySelector('[data-btn="="]');

    addClassActive(clickedBtn);
})

function changeColor(){
    const calc = document.querySelector('.calc__btn-list'),
          wrapper = document.querySelector('.calc__wrapper-bg');
    
    checkBox.addEventListener('input', () =>{
        if(checkBox.checked){
            calc.style.cssText = 'color: #126CD7';
            wrapper.style.cssText = 'background-color: #0094FF';
        } else{
            calc.style.cssText = 'color: #8016A5';
            wrapper.style.cssText = 'background-color: #790F9E';
        }
    })
};





buttonIdentifier();
changeColor();

