const searchFoodItem = () =>{
    const userInput = document.getElementById('userInput').value
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ userInput }`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoodItem(data.meals))
}

const displayFoodItem = food =>{
    const mealDetails = document.getElementById('mealDetails')
    mealDetails.innerHTML = ""
    food.forEach(item => {
        const mealDiv = document.createElement('div')
        mealDiv.className = 'mealDiv'
        const mealInfo = `
            <a onclick="getMealInfo('${item.strMealThumb }','${item.strMeal}','${ item.strIngredient1 }','${ item.strIngredient2 }','${ item.strIngredient3 }','${ item.strIngredient4 }','${ item.strIngredient5 }','${ item.strIngredient6 }','${ item.strIngredient7}')" class="linkUp" href="#">
            <img class="mealImage" src="${item.strMealThumb }"> </img>
            <h2 class="mealName">${ item.strMeal}</h2>
            </a>
        `
        
        mealDiv.innerHTML = mealInfo
        mealDetails.appendChild(mealDiv)
    });
}

const getMealInfo = (itemImage,mealName, itemIngredients1, itemIngredients2, itemIngredients3, itemIngredients4, itemIngredients5, itemIngredients6, itemIngredients7) =>{
    const mealInfo = document.getElementById('mealInfo')
    mealInfo.innerHTML = ""
    const mealItem = document.createElement('div')
    const mealAbout = `
        <img class="mealImage" src=${itemImage}></img>
        <h3 class="displayMealName">${mealName}</h3>
        <ul class="ingredientsUnOrder">
            <li class="ingredientsList">${itemIngredients1}</li>
            <li class="ingredientsList">${itemIngredients2}</li>
            <li class="ingredientsList">${itemIngredients3}</li>
            <li class="ingredientsList">${itemIngredients4}</li>
            <li class="ingredientsList">${itemIngredients5}</li>
            <li class="ingredientsList">${itemIngredients6}</li>
            <li class="ingredientsList">${itemIngredients7}</li>
        </ul>
    `
    mealItem.innerHTML = mealAbout
    mealInfo.appendChild(mealItem)
}