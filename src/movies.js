// Iteration 1: All directors? - Get the array of all directors.



function getAllDirectors(arr){
    
   let newArray = arr.map((movie)=>{return movie.director}) ;
   return newArray;
   
};

getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?





function howManyMovies(arr){
    
 let dramaSpielbergMovies = arr.filter((movie)=> {
       return movie.director === "Steven Spielberg" && movie.genre.includes(`Drama`) ;

 })
 return dramaSpielbergMovies.length;
};


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr){
    if (arr.length === 0){
        return 0;
    }
    let average = arr.reduce(function(acc, movie){
        if(movie.rate){
            return acc + movie.rate;
        } else {
            return acc;
        }

    },0);
    return parseFloat((average / arr.length).toFixed(2));

}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){
    
    let dramaMoviesArray = arr.filter(function(movie){
        return movie.genre.includes("Drama");
    })
    return ratesAverage(dramaMoviesArray);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){

    let newSortedArray = [...arr].sort(function(a,b){

        if (a.year === b.year){
            return a.title.localeCompare(b.title);

        }else {
            return a.year-b.year;
        }

    });

    return newSortedArray;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){

    let titlesArray = arr.map(function(movie){

        return movie.title;
    })
    console.log(titlesArray);
    let sortedTitlesArr = titlesArray.sort();
    console.log(sortedTitlesArr);
    return sortedTitlesArr.splice(0,20);

}

/*function orderAlphabetically(arr){

    let titleSortedArray = [...arr.title].sort(function(a,b){
        return a.title.localeCompare(b.title)
    })
    
    return titleSortedArray;

}
*/

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
