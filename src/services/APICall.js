//import fetch from "node-fetch";

let apiKey = "5bea5f7eb0cd4eb299be030dbd912455";

export const callFood = async (cuisine, random, intolerances, diet) => {
    var sort;
    if (random) sort = "random";
    else sort = "popularity";

    let url = "https://api.spoonacular.com/recipes/complexSearch".concat(
    "?apiKey=",apiKey, 
    "&cuisine=",cuisine, 
    "&includeIngredients&instructionsRequired&number=3",
    "&sort=",sort,
    "&intolerances",intolerances,
    "&diet=",diet);

    //console.log(url);

    const response = await fetch(url);
    return (await response.json()); //extract JSON from the http response
  }

export const callRecipe = async (recipe) => {
    let url = "https://api.spoonacular.com/recipes/".concat
    (recipe,"/information?apiKey=", apiKey);
    // console.log(url);
    const response = await fetch(url);
    return (await response.json()); //extract JSON from the http response
  }

//const food = await callFood("Italian",false,"","");
//const recipe = await callRecipe(food["results"][0]["id"]);

//console.log(recipe);

//const readyInMinutes = recipe["readyInMinutes"];
//const healthScore = recipe["healthScore"];
//const ingredients = recipe["extendedIngredients"];
//const instructions = recipe["instructions"];