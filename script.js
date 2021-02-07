// document.getElementById('searchButton').addEventListener('click', function ()
// {
//     const userInput = document.getElementById('userInput').value
//     const post = { userInput }
//     postToTheServer(post)
// })

// function postToTheServer(postInfo){
//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${postInfo.userInput}`)
//         .then(res => res.json())
//         .then(data =>
//         {
//             const mealDetails = document.getElementById('mealDetails')
//             data.meals.map((item) => {
//                 const mealDiv = document.createElement('div')
//                 mealDiv.className = "mealDiv"
//                 const mealInfo = `
//                     <a class="linkUp" href="#">
//                     <img class="mealImage" src="${item.strMealThumb }"></img>
//                     <h2 class="mealName">${ item.strMeal}</h2>
//                     </a>
//                 `
//                 mealDiv.innerHTML = mealInfo
//                 mealDetails.appendChild(mealDiv)

//                 mealDiv.addEventListener('click', function ()
//                 {
//                     const allAboutMeals = document.createElement('div')
//                     allAboutMeals.className = 'allAboutMeals'   

//                 })
                
//             })
//         })
// }

document.getElementById("searchButton").addEventListener("click", function ()
{
    const userInput = document.getElementById("userInput").value;
    const post = { userInput };
    postToTheServer(post);
});

function postToTheServer(postInfo)
{
    fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${ postInfo.userInput }`
    )
        .then((res) => res.json())
        .then((data) =>
        {
            const mealDetails = document.getElementById("mealDetails");
            data.meals.map((item) =>
            {
                const mealDiv = document.createElement("div");
                mealDiv.className = "mealDiv";
                const mealInfo = `
                    <a class="linkUp" href="#" onclick="getDetails('${ item.idMeal }','${ item.strMeal }','${ item.strMealThumb }','${ item.strIngredient1 }','${ item.strIngredient2 }','${ item.strIngredient3 }','${ item.strIngredient4 }','${ item.strIngredient5 }','${ item.strIngredient6 }','${ item.strIngredient7 }')" >
                    <img class="mealImage" src="${ item.strMealThumb }"></img>
                    <h2 class="mealName">${ item.strMeal }</h2>
                    </a>
                `;

                mealDiv.innerHTML = mealInfo;
                mealDetails.appendChild(mealDiv);
            });
        });
}



function getDetails(
    id,
    name,
    img,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7
)
{
    console.log(img, id, strIngredient7);
    homepage = document.getElementById("homePage");
    homepage.style.display = "none";

    detailsPage = document.getElementById("detailsPage");
    detailsPage.style.dispaly = ""

    html = `
  
  <p><button onclick="goBack()" >go back</button> </p>
  
  <img src="${ img }" width="300" /> 

        <h1>${ name }</h1>
        <p>${ strIngredient1 }</p>
         <p>${ strIngredient3 }</p>
         <p>${ strIngredient4 }</p>
         <p>${ strIngredient5 }</p>
         <p>${ strIngredient6 }</p>
         <p>${ strIngredient7 }</p>
         
         `;
    detailsPage.insertAdjacentHTML('beforeend', html)
    //   detailsPage.inner = html;
    console.log();
}


function goBack()
{
    document.getElementById("homePage").style.display = "block";

    document.getElementById("detailsPage").style.display = "none";
}