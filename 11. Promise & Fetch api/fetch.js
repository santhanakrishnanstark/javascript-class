/**
 * 
 * Fetch API
 * 
 * It provide an interface for fetching resources(across the network)
 * 
 */

/**
 * 
 * fetch('url')
 * .then()
 * .catch()
 * 
 */

 fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then(result => result.json())
 .then(data => console.log(data))

//  The Meal DB

fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(result => result.json())
.then(data => {
    generateMealPage(data);
})

function generateMealPage(data) {
    let imgEl = document.querySelector('#mealImage');
    let titleEl = document.querySelector('#meal-title');

    imgEl.src = data.meals[0].strMealThumb;

    titleEl.textContent = data.meals[0].strMeal;
}




// ref site for rest api : https://www.themealdb.com/api.php