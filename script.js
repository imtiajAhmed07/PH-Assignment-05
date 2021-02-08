const searchFoodItem = () =>{
    const userInput = document.getElementById('userInput').value
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ userInput }`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoodItem(data.meals))
}

const displayFoodItem = food =>{
        const mealDetails = document.getElementById('mealDetails')
    food.forEach(item => {
        const mealDiv = document.createElement('div')
        mealDiv.className = 'mealDiv'
        const mealInfo = `
            <img class="mealImage" src="${item.strMealThumb}"> </img>
            <h2 class="mealName">${item.strMeal}</h2>
        `
        mealDiv.innerHTML = mealInfo
        mealDetails.appendChild(mealDiv)
    });
}