const cocktailsCenter = document.querySelector(".cocktails-center");
const input = document.querySelector("#input");
const loader = document.querySelector(".loader");
input.addEventListener("input", getData);
function createElement(todoArr) {
  cocktailsCenter.innerHTML = "";
  todoArr.drinks.forEach((item) => {
    const article = document.createElement("article");
    article.classList.add("cocktail");
    article.innerHTML += `
    <div class="img-container">
      <img
        src=${item.strDrinkThumb}
        alt=""
      />
    </div>
    <div class="cocktail-footer">
      <h3>${item.strDrink}</h3>
      <h4>${item.strGlass}</h4>
      <p>${item.strAlcoholic}</p>
      <a class="btn btn-primary btn-details" id="btn" href="./about.html?${item.idDrink}"
        >details</a
      >
    </div>
    `;
    cocktailsCenter.appendChild(article);
    article.value = "";
  });
}
function getData() {
  const inputValue = input.value;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      createElement(data);
    });
}
