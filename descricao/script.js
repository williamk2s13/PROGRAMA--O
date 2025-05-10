async function adcdesc(){
    const pokemon = JSON.parse(localStorage.getItem("pokemon"))
    console.log(pokemon.id,"pokemon")
    document.body.insertAdjacentHTML("beforeend",
        `
         <div class="modal">
         <p class="namepoke">${pokemon.name}</p>
            <p>
                <strong><em>Habilidade 1:</em></strong> ${
                  pokemon.abilities[0].ability.name
                }

                </p>
        </div>
          <strong><em>Habilidade 2:</em></strong> 
                        ${
                          pokemon.abilities[1].ability.name
                        }
                        </p>
                        <strong><em>Experiência base:</em></strong> 
                            ${
                              pokemon.base_experience
                            }
                        </p>
                        <strong><em>índice do jogo:</em></strong> ${
                              pokemon.game_indices[0].game_index
                            }
                            <p><strong><em>Movimentos:</em></strong> ${
                          pokemon.moves[0] ? pokemon.moves[0].move.name : "Não há"
                        }, ${
              pokemon.moves[1] ? pokemon.moves[1].move.name : "Não há"
            }, ${pokemon.moves[2] ? pokemon.moves[2].move.name : "Não há"}, ${
              pokemon.moves[3] ? pokemon.moves[3].move.name : "Não há"
            }, ${pokemon.moves[4] ? pokemon.moves[4].move.name : "Não há"} 
            </p>

                       

        `
    )
}
adcdesc()