document.querySelector(".container").innerHTML = `
<h1>....Loading</h1>
`;


const getData = () => {
  document.querySelector(".container").innerHTML = `<button id="else">Show All Data</button>`;
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((json) =>
      json.map((item) => {
    document.querySelector(".container").innerHTML += `
    
    <div id="card">
    <img src=${item.image}>
    <h2>${item.title.slice(0, 20)}...</h2>
    <p id="description">${item.description.slice(0, 40)}...</p>
    <p id="price">${item.price} <span>$</span></p>
  </div>
    `;
      })
    );
};

setTimeout(() => {
  getData();
  
}, 2000);

document.querySelector("#else").addEventListener("click", () =>{
  getData();
}); 



