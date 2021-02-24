
const search = document.getElementById("search");
const submit = document.getElementById("submit");
const mealEl = document.getElementById("meals");
const resultHeading = document.getElementsByClassName("resultHeading");
const single_mealEl = document.getElementById("single-meal");


submit.addEventListener("click", searchMeal);
function searchMeal(e){
e.preventDefault();


const term = search.value;
if(term.trim()){

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res => res.json())
      .then(data => {
          console.log(data);
          
       resultHeading.innerHTML = `<h2> search result for ${term}`;

       if(data.meals ===null){
        resultHeading.innerHTML = `<h2> There is no result for ${term}`;

       }
       else{
           mealEl.innerHTML = data.meals.map(
           (meal) => `<div class="meal">
                <img src=" ${meal.strMealThumb}" alt="${meal.strMeal}">
                <div class="meal-info data-mealId="${meal.idMeal}">
                <p class="font" >${meal.strMeal}<p>
                </div>

           </div>`).join("");
           }


      });


}
}
