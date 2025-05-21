import { cores } from "./cores.js";

let offset = 0;

// Função principal para inicializar a Pokédex
async function initPokedex() {
  const ul = document.querySelector(".pokemons");
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=16`, {
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
  });
  const response = await res.json();
  const listPokemon = response.results;

  for (let item of listPokemon) {
    const data = await fetch(item.url, {
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    });
    const dados = await data.json();

    // Adiciona o Pokémon à lista
    ul.insertAdjacentHTML(
      "beforeend",
      `
        <li id=${item.name} style="background-color:${
        cores[dados.types[0].type.name]
      }">
          <div class="ola">
            <p>${item.name}  #${dados.id}</p>
            <button id="${item.name}desc" class="descricao">descrição</button>
            <button id="${item.name}favo" class="favorito">favorito</button>
          </div>
          <img class="imgpoke" src="${
            dados.sprites.other.dream_world.front_default
          }">
        </li>
      `
    );

    // Adiciona evento ao botão de descrição
    const descricao = document.getElementById(`${item.name}desc`);
    descricao.addEventListener("click", () => {
      localStorage.setItem("pokemon", JSON.stringify(dados));
      location.href = "../descricao/index.html";
    });

    // Adiciona evento ao botão de favorito
    const botaoFavorito = document.getElementById(`${item.name}favo`);
    botaoFavorito.addEventListener("click", () => {
      PokemonAdd(item, dados);
    });
  }

  // Configura os botões de navegação
  configurePagination();
}

// Função para configurar a paginação
function configurePagination() {
  const prevBtn = document.querySelector("#preve");
  const btnNext = document.querySelector("#nexte");

  btnNext.addEventListener("click", () => {
    offset += 20;
    prevBtn.removeAttribute("disabled");
    nextPage();
  });

  prevBtn.addEventListener("click", () => {
    offset -= 20;
    if (offset === 0) {
      prevBtn.setAttribute("disabled", true);
    }
    nextPage();
  });

  prevBtn.setAttribute("disabled", true);
}

// Função para carregar a próxima página
async function nextPage() {
  const ul = document.querySelector(".pokemons");
  ul.innerHTML = "";

  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=16`,
    {
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    }
  );
  const response = await res.json();
  const listPokemon = response.results;

  for (let item of listPokemon) {
    const data = await fetch(item.url, {
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
    });
    const dados = await data.json();

    ul.insertAdjacentHTML(
      "beforeend",
      `
        <li id=${item.name} style="background-color:${
        cores[dados.types[0].type.name]
      }">
          <div class="ola">
            <p>${item.name}  #${dados.id}</p>
            <button id="${item.name}desc" class="descricao">descrição</button>
            <button id="${item.name}favo" class="favorito">favorito</button>
          </div>
          <img class="imgpoke" src="${
            dados.sprites.other.dream_world.front_default
          }">
        </li>
      `
    );

    // Adiciona evento ao botão de descrição
    const descricao = document.getElementById(`${item.name}desc`);
    descricao.addEventListener("click", () => {
      localStorage.setItem("pokemon", JSON.stringify(dados));
      location.href = "../descricao/index.html";
    });

    // Adiciona evento ao botão de favorito
    const botaoFavorito = document.getElementById(`${item.name}favo`);
    botaoFavorito.addEventListener("click", () => {
      PokemonAdd(item, dados);
    });
  }
}

// Função para adicionar ou remover Pokémon dos favoritos
function PokemonAdd(item, dados) {
  const UserId = localStorage.getItem("userId");
  const botaoAdd = document.getElementById(`${item.name}favo`);
  let eFavorito = botaoAdd.getAttribute("data-fav") !== null;

  botaoAdd.addEventListener("click", async () => {
    const idFav = botaoAdd.getAttribute("data-fav");

    if (eFavorito) {
      // Remove dos favoritos
      await fetch(`http://localhost:3001/pokemon/${idFav}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      botaoAdd.removeAttribute("data-fav");
      eFavorito = false;
    } else {
      // Adiciona aos favoritos
      const Pokemon = {
        name: item.name,
        img: dados.sprites.other.dream_world.front_default,
        userId: UserId,
        color: `${cores[dados.types[0].type.name]}`,
      };

      const res = await fetch("http://localhost:3001/pokemon/", {
        body: JSON.stringify(Pokemon),
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      const response = await res.json();
      botaoAdd.setAttribute("data-fav", response.id);
      eFavorito = true;
    }
  });
}

// Inicializa a Pokédex
initPokedex();