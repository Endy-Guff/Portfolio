const inputVolume = document.querySelector('.piano__volume'),
      checkbox = document.querySelector('.piano__checkbox'),
      keysItem = document.querySelectorAll('.piano__keys__item');

function range(){
    inputVolume.addEventListener('input', () =>{
        let val = inputVolume.value;
        inputVolume.style.cssText = `background: linear-gradient(90deg,#0881F4 0%, #0881F4 ${val*100}%, #D9D9D9 ${val*100}%, #D9D9D9 100%);`
    })
    
}


function showKeys(){
    checkbox.addEventListener('input', () =>{
        if(checkbox.checked == false){
            keysItem.forEach(function(item, i){
                item.style.cssText = 'font-size: 0';
            })
        } else if(checkbox.checked == true){
            keysItem.forEach(function(item, i){
                item.style.cssText = 'font-size: 20';
            })
        }
    })
}

let audio = new Audio("audio/a.wav");

function playTune(key){
    audio.src = `audio/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add('active');
    setTimeout(() =>{
        clickedKey.classList.remove('active');
    }, 150)
}

keysItem.forEach(key => {
    key.addEventListener('click', () => playTune(key.dataset.key))
});

function pressKey(e){
    playTune(e.key);
}

document.addEventListener('keydown', e =>{
    pressKey(e);
});

inputVolume.addEventListener('input', (e) =>{
    audio.volume = e.target.value;
});

showKeys();
range();