"use script";

let numberOfFilms;

function start(){
   numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?','');

   while( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?','');
   }
}
start();

const personalMovieDb ={
count: numberOfFilms,
movies: {},
actors: {},
genres : [],
privat : false
};

function showMyDb(hidden){
     if (!hidden){
         console.log(personalMovieDb);
     }
}
showMyDb(personalMovieDb.privat);

function writeYourGenres(){
    for(let i= 1; i<=3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`,'');
        personalMovieDb.genres[i-1] = genre;
    }
writeYourGenres();
    
            

}
function rememberMyFilms(){
    for(let i=0 ; i<2; i++){
        const a = prompt('Сколько фильмов вы уже посмотрели?',''),
              b = prompt('На сколько оцените его?','');
              personalMovieDb.movies[a] = b;
    
        if( a != null && b !=null && a !='' && b !='' && a.length <50) {
            personalMovieDb.movies[a] = b;
        }else {
            i--;
        }
    }
}
rememberMyFilms();




function detectPersonalLevel(){
    if (personalMovieDb.count < 10){
        console.log('Просмотренно довольно мало фильмов','');
    
    }else if (personalMovieDb.count >= 10 && personalMovieDb.count <30 ){
        console.log('Вы классический зритель','');
    
    }else if(personalMovieDb.count >= 30){
        console.log('Вы киноман','');
    
    }else{
        console.log('Произошла ошибка','');
    }
}
 detectPersonalLevel();

 
console.log(personalMovieDb);
