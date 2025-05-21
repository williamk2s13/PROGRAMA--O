 async function pegafavorito() {
  const ul = document.querySelector(".favoritos");
  const res = await fetch("http://localhost:3001/pokemon/")
  const response = await res.json();
  for (let item of response) {
    ul.insertAdjacentHTML("beforeend",
      `<li class="card">
        <img src="${item.sprites.front_default}" alt="${item.name}">
        <h2>${item.name}</h2>
        <button id="${item.name}favo" class="favo">Remover Favorito</button>
      </li>`
    )}}; 