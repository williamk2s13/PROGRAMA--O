import {cores} from "../pokedex/cores.js"    
async function adcdesc(){
    const pokemon = JSON.parse(localStorage.getItem("pokemon"))
    console.log(pokemon.id,"pokemon")
    const desc = document.querySelector(".descricao1")
    desc.insertAdjacentHTML("beforeend",
        `
        <div class="axl">
     <div id=${pokemon.name} class="containerpoke" style="background-color:${cores[pokemon.types[0].type.name]}">
     </div> 
         <p class="namepoke">${pokemon.name}</p>
       <img class="imgpok" src="${pokemon.sprites.other.dream_world.front_default}">
         <div class="div-p">
         <p class="ppoke">
                <strong><em>Habilidade 1:</em></strong> ${
                  pokemon.abilities[0].ability.name
                }
                </p>
                <p class="ppoke">
          <strong><em>Habilidade 2:</em></strong> 
                        ${
                          pokemon.abilities[1].ability.name
                        }
                        </p>
                        <p class="ppoke">
                        <strong><em>Experiência base:</em></strong> 
                            ${
                              pokemon.base_experience
                            }
                        </p>
                        <p class="ppoke">
                        <strong><em>índice do jogo:</em></strong> ${
                              pokemon.game_indices[0].game_index
                            }
                            </p>
                            <p class="ppoke"><strong><em>Movimentos:</em></strong> ${
                          pokemon.moves[0] ? pokemon.moves[0].move.name : "Não há"
                        }, ${
              pokemon.moves[1] ? pokemon.moves[1].move.name : "Não há"
            }, ${pokemon.moves[2] ? pokemon.moves[2].move.name : "Não há"}, ${
              pokemon.moves[3] ? pokemon.moves[3].move.name : "Não há"
            }, ${pokemon.moves[4] ? pokemon.moves[4].move.name : "Não há"} 
            </p>
         
        </div>
                       

        `
    )
}
adcdesc()
       
    
