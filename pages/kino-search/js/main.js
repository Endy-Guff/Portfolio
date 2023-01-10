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
    
const headerLayerBg = 
      document.querySelector('.header__layer--bg'), 
      headerLayer1 = 
      document.querySelector('.header__layer--1'),
      headerLayer2 = 
      document.querySelector('.header__layer--2'),
      headerContent = 
      document.querySelector('.header__layer-content');

window.addEventListener('scroll', e =>{
    headerLayerBg.style.cssText = `transform: translateY(${this.scrollY / 1.6}px)`;
    headerLayer2.style.cssText = `transform: translateY(${this.scrollY / 2.5}px)`;
    headerLayer1.style.cssText = `transform: translateY(${this.scrollY / 5}px)`;
    headerContent.style.cssText = `transform: translateY(${this.scrollY / 1.8}px)`;
})


let page = 1;
const API_KEY = 'c64ab17b-d0cc-4679-90fa-e65b7c4e17b8',
      TOP_100_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=`;
      



const modal = document.querySelector('.modal'),
      filmsItems = document.querySelector('.films__items'),
      uploadBtn = document.querySelector('.main__btn'),
      searchInput = document.querySelector('.search__input'),
      title = document.querySelector('.title');

document.addEventListener('keydown', e =>{
    if(e.key === 'Enter'){
        let keyword = '';
        keyword = searchInput.value
        if(!keyword) return false
        uploadBtn.style.display = 'none'
        title.textContent = `Поисковой запрос: ${keyword}`
        filmsItems.innerHTML = ''
        getMovies(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=`, page);
        searchInput.value = ''
    }
});


uploadBtn.addEventListener('click', () =>{
    page++;
    getMovies(TOP_100_URL, page);
})

async function getMovies(url, page){

    const resp = await fetch(url+page, {
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        }
    })
    const data = await resp.json();
    const movies = data.films;

    showMovies(movies);

    const filmBtn = document.querySelectorAll('.films__btn'),
          modalClose = document.querySelector('.modal__close');

    filmBtn.forEach(btn =>{
        btn.addEventListener('click', () =>{
            getFilm(btn.dataset.id);
            getFilmPeople(btn.dataset.id);
            document.body.style.overflow = 'hidden';
            modal.classList.remove('modal--inactive');
            modal.classList.add('modal--active');
            setTimeout(() =>{
                modal.classList.add('modal--animation');
            }, 100)
        })
    })

    function closeModal(){
        document.body.style.overflow = '';
        modal.classList.remove('modal--animation');
        modal.classList.remove('modal--active');
        setTimeout(() =>{
            modal.classList.add('modal--inactive');
        }, 100)
    }
    
    modalClose.addEventListener('click', () =>{
        closeModal();
    })

    document.addEventListener('keydown', e =>{
        if(e.code == 'Escape'){
            closeModal();
        }
    })

}

async function getFilm(id){
    const resp = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        }
    })
    const data = await resp.json();

    showFilm(data)
}

async function getFilmPeople(id){
    const resp = await fetch(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}`, {
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        }
    })
    const data = await resp.json();
    console.log(data);
    showFilmPeople(data)
}

function showFilmPeople(data){
    
    const actors = document.querySelector('#actors'),
          directors = document.querySelector('#directors');

    cleanHTML(actors);
    cleanHTML(directors);

    function roleVerification(role){
        if(role == null){
            return '';
        } else{
            if(role.length > 18){
                return `${role.substr(0, 17)}...`
            } else{
                return role
            }
        }
    }

    function cleanHTML(element){
        element.innerHTML = '';
    }
    
    function makingHTML(profession, item){
        const itemInner = document.createElement('div');
        itemInner.classList.add('modal__item-inner');
        itemInner.innerHTML = `
            <div class="modal__item-img">
                <img src="${item.posterUrl}" alt="">
            </div>
            <p class="modal__item-name">
                ${item.nameRu}
            </p>
            <p class="modal__item-role">
                ${roleVerification(item.description)}
            </p>
        `

        profession.append(itemInner)
    }

    data.forEach(item =>{

        if(item.professionText == 'Режиссеры'){
            makingHTML(directors, item);
        } else if(item.professionText == 'Актеры'){
            makingHTML(actors, item);
        } else return

    })
}

function showFilm(data){
    const poster = modal.querySelector('.modal__img-box img'),
          filmName = modal.querySelector('.modal__film-name'),
          desc = modal.querySelector('.modal__desc'),
          filmYear = modal.querySelector('#filmYear'),
          filmCountry = modal.querySelector('#filmCountry'),
          filmGenre = modal.querySelector('#filmGenre'),
          filmSlogan = modal.querySelector('#filmSlogan'),
          filmLength = modal.querySelector('#filmLength');

    poster.src = `${data.posterUrl}`;
    filmName.textContent = `${data.nameRu}`;
    desc.innerHTML = `<span>Описание:</span> ${data.description}`;
    filmYear.textContent = `${data.year}`;
    filmCountry.textContent = `${data.countries.map((item) => `${item.country}`)}`;
    filmGenre.textContent = `${data.genres.map(item => `${item.genre}`)}`;
    filmSlogan.textContent = `${data.slogan}`;
    filmLength.textContent = `${data.filmLength} ${declensionWords(data.filmLength)}`
    
}

function showMovies(movies){

    movies.forEach((item) => {
        const filmsItem = document.createElement('div');
        filmsItem.classList.add('films__item');

        filmsItem.innerHTML = 
        `
        <div class="films__item-wrap">
            <div class="films__item-inner">
                <img class="films__bg" src="${item.posterUrlPreview}" alt="${item.nameRu}">
                <div class="films__rating-box films__rating-box--${colorRating(ratingError(item.rating))}">
                    <span class="fims__rating-num">
                        ${ratingError(item.rating)}
                    </span>
                    <p class="films__rating-score">
                        ${showRating(ratingError(item.rating))}
                    </p>
                </div>
                <div class="films__desc-box">
                    <p class="films__desc">
                        ${item.year}, ${item.countries.map((country) => `${country.country}`)},<br>${item.genres.map((genre) => `${genre.genre}`)}
                    </p>
                    <span class="films__desc-time">
                        ${toMinute(item.filmLength)}
                    </span>
                </div>
                <button data-id="${item.filmId}" class="films__btn">
                    ПОДРОБНЕЕ
                </button>
            </div>
        </div>
        <p class="films__name">
            ${cutName(item.nameRu)}
        </p>
        `;
        
        filmsItems.append(filmsItem);

        

        
    });
}

function colorRating(rating){
    if(rating <= 10 && rating >= 7){
        return 'green'
    } else if(rating < 7 && rating >= 4){
        return 'yellow'
    } else if(rating < 4 && rating >= 0){
        return 'red'
    }
}

function showRating(rating){
    if(rating <= 10 && rating > 8){
        return 'Отлично!'
    } else if(rating <= 8 && rating > 6){
        return 'Хорошо'
    } else if(rating <= 6 && rating > 4){
        return 'Средний'
    } else if(rating <= 4 && rating > 2){
        return 'Плохо'
    } else if(rating <= 2 && rating >= 0){
        return 'Ужас!'
    } else{
        return ''
    }
}

function cutName(name){
    if(name.length > 15){
        const newName = name.slice(0, 16) + '...';
        return newName
    } else{
        return name
    }
}

function declensionWords(number){
    const txt = ['минута', 'минуты', 'минут']
    const cases = [2, 0, 1, 1, 1, 2];
    return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

function toMinute(time){
    if(time === null || time == undefined){
        return 'Длительность неизвестна'
    } else{
        const hours = (Number(time.slice(0, 2))) * 60;
        const minute = Number(time.slice(3, 5));
        const total = hours + minute;
        return `${total} ${declensionWords(total)}`
    }
}

function ratingError(rating){
    if(rating >= 0 && rating < 10){
        return rating
    } else if(rating == 10){
        return Math.round(Rating)
    } else {
        const newRating = ((rating.slice(0, -1)) / 10).toFixed(1);
        if(newRating == 10){
            return Math.round(newRating)
        } else{
            return newRating
        }
    }
}

const modalBtn = document.querySelectorAll('.modal__tab'),
      modalBtnParrent = document.querySelector('.modal__tabs'),
      modalContent = document.querySelectorAll('.modal__tabs-item');


function hideTabs(){
    modalBtn.forEach(item =>{
        item.classList.remove('modal__tab--active');
    })
    modalContent.forEach(item =>{
        item.classList.remove('modal__tabs-item--active');
        item.classList.remove('modal__tabs-item--animation');
        item.classList.add('modal__tabs-item--inactive');
    })
}

function showTabs(i){
    modalBtn[i].classList.add('modal__tab--active');
    modalContent[i].classList.add('modal__tabs-item--active');
    modalContent[i].classList.remove('modal__tabs-item--inactive');
    setTimeout(() =>{
        modalContent[i].classList.add('modal__tabs-item--animation');
    }, 100)
}

modalBtnParrent.addEventListener('click', e =>{
    if(e.target && e.target.classList.contains('modal__tab')){
        modalBtn.forEach((item, i) =>{
            if(e.target == item){
                hideTabs();
                showTabs(i);
            }
        })
    }
})










getMovies(TOP_100_URL, page);