const root = document.querySelector('#root');

const button = document.createElement('button');
button.textContent = 'Click me';


root.appendChild(button);

const fetchRandomDrink = async () => {
    const responseCocktail = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")

    return await responseCocktail.json();
}

button.addEventListener('click', async () => {
    const response = await fetchRandomDrink();
    const randomDrink = response.drinks[0];


    const h1 = document.createElement('h1');

          h1.textContent = randomDrink.strDrink;

    const h2 = document.createElement('h2');

         h2.textContent = randomDrink.strInstructions;

    const h3 = document.createElement('h3');

        h3.textContent = randomDrink.strCategory;



    const ulElement = document.createElement('ul');

        for (let i = 1; i <= 15; i++){
  
            const ingredient = randomDrink['strIngredient'+i];
        
            if (ingredient){
                const liElement = document.createElement('li');
                liElement.textContent = ingredient;
                ulElement.appendChild(liElement);
            }
        
        }

        console.log(ulElement)
      
        root.appendChild(ulElement);
        
        
        
    
        const imgElement = document.createElement("img")
    imgElement.src = randomDrink.strDrinkThumb;



    root.appendChild(h1);
    root.appendChild(h2);
    root.appendChild(h3);
    root.appendChild(imgElement);
    root.appendChild(ulElement);
        
    
});


