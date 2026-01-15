 import data from './dropdownData.js';

 const navEl = document.getElementById('nav');
 const sl = document.createElement('select');
 sl.setAttribute('id', 'years');

 data.forEach(op => {
    const option = document.createElement('option')
    option.textContent = op.text
    option.value = op.value
    
    if(op.selected) 
        {option.selected = op.selected}
    sl.appendChild(option)
 })
 navEl.appendChild(sl);

const option = {
    method: 'GET',
    header:{
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTBhMmFlOTUzZmZiZDMwMWEzNTZhYTc2MmEyYmY5YiIsIm5iZiI6MTc2ODM1ODk1Ni4wNTYsInN1YiI6IjY5NjcwNDJjZGIxYjJkNjdlODY4NmJjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wzLPdUJqUrywxlXSdhqsAcHpJOm6xscPbVDDryUSJZs'
    }
}
const apiKey = '5a0a2ae953ffbd301a356aa762a2bf9b'
console.log(document.getElementById('years'));

const dropdown = document.getElementById('years')
let year =  dropdown.value
let page = 1
const pagination = document.getElementById('pagination')

const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&year=${year}&page=${page}` 

// https://api.themoviedb.org/3/discover/movie?api_key=5a0a2ae953ffbd301a356aa762a2bf9b&year=2012&page=1

const displayMovie = async (url) => {
    let res
    res = await fetch(url);
    const movies = await res.json(res)
    console.log(movies)
    const urlPoster = `https://image.tmdb.org/t/p/w500`

    movies.results.forEach(m => {
        const movieEl = document.createElement('div')
        movieEl.classList.add('superContainer')
        const circle = document.createElement('div');
        circle.classList.add('rateContainer')
        const title = document.createElement('h2')
        title.classList.add('title')
        const rate = document.createElement('h4')
        title.classList.add('rateText')
        const poster = document .createElement('img')
        title.innerHTML = `${m.title.substring(0,19)}`
        poster.src = `${urlPoster}${m.poster_path}`
        rate.innerHTML = `${m.vote_average}`
        circle.appendChild(rate)
        movieEl.appendChild(circle)
        movieEl.appendChild(title)
        movieEl.appendChild(poster)
        content.appendChild(movieEl)


        const linkTo = document.createElement('a')

    })
    
    dropdown.addEventListener('change' , () => {
    console.log(`ได้เลือกปี ${dropdown.value}`)
    year = dropdown.value
    let updateURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&year=${year}&page=${page}`
    content.innerHTML = ""
    displayMovie(updateURL)
})

    const onPageChange = (p) =>{
        page = p
        let updateURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&year=${year}&page=${page}`
        content.innerHTML = ""
        displayMovie(updateURL)
    }

}   

displayMovie(url)




