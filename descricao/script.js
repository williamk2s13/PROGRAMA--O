import {cores} from "../pokedex/cores.js"    
async function adcdesc(){
    const pokemon = JSON.parse(localStorage.getItem("pokemon"))
    console.log(pokemon.id,"pokemon")
    const maxStat = 150;
const stat = pokemon.stats[0].base_stat;
const progrecov = `${(stat / maxStat) * 100}%`;

const stata = pokemon.stats[1].base_stat;
const progrecoa = `${(stata / maxStat) * 100}%`;

   
const statd = pokemon.stats[2].base_stat;
const progrecod = `${(statd / maxStat) * 100}%`;


const statve = pokemon.stats[3].base_stat;
const progrecove = `${(statve / maxStat) * 100}%`;
    const desc = document.querySelector(".descricao1")
    desc.insertAdjacentHTML("beforeend",
        `
        <div class="axl">
     <div id=${pokemon.name} class="containerpoke" style="background-color:${cores[pokemon.types[0].type.name]}">
     </div> 
         <p class="namepoke">${pokemon.name}</p>
       <img class="imgpok" src="${pokemon.sprites.other.dream_world.front_default}">
       <div class="bloco">  <p class="ola3"  style="background-color:${cores[pokemon.types[0].type.name]}">  ${pokemon.types[0].type.name}</p></div>
         
        </div>


        
        <div class="descricao2">
        
        <div class="div-p">
        <p class="stats">
        <strong><em>vida:</em></strong> ${
             pokemon.stats[0].base_stat
           }
           </p>
        
           <div class="barra1">
                <div class="progreco"
                    style="width:${progrecov}">
               </div>
           </div>
        
        
                   <p class="stats">
        <strong><em>ataque:</em></strong> ${
             pokemon.stats[1].base_stat
           }
            <div class="barra1">
                <div class="progreco"
                    style="width:${progrecoa}; background-color: #FF4500">
               </div>
           </div>
        
           </p>
                   <p class="stats">
        <strong><em>defesa:</em></strong> ${
             pokemon.stats[2].base_stat
           }
            <div class="barra1">
                <div class="progreco"
                    style="width:${progrecod}; background-color: #7B68EE">
               </div>
           </div>
        
           </p>
                   <p class="stats">
        <strong><em>velocidade:</em></strong> ${
             pokemon.stats[5].base_stat
           }
            <div class="barra1">
                <div class="progreco"
                    style="width:${progrecove}; background-color: #FFFF00">
               </div>
           </div>
        
           </p>
        

         <p class="ppoke">habilidade 1: 
         </p>
         <p class="ola4"> ${pokemon.abilities[0].ability.name}</p>

         <div class="barra2"></div>

                <p class="ppoke">Habilidade 2:</p>
                       <p class="ola4">   ${ pokemon.abilities[1].ability.name} </p>

                             <div class="barra2"></div>

                        <p class="ppoke">Experiência base:</p>
                          <p class="ola4">${pokemon.base_experience}</p>

                                <div class="barra2"></div>
                          
                          <p class="ppoke">índice do jogo: </p>
                          <p class="ola4">${pokemon.game_indices[0].game_index }</p>

                                <div class="barra2"></div>

                            <p class="ppoke">Movimentos:</p>
                            <p class="ola4"> ${
                          pokemon.moves[0] ? pokemon.moves[0].move.name : "Não há"
                        }, ${
              pokemon.moves[1] ? pokemon.moves[1].move.name : "Não há"
            }, ${pokemon.moves[2] ? pokemon.moves[2].move.name : "Não há"}, ${
              pokemon.moves[3] ? pokemon.moves[3].move.name : "Não há"
            }, ${pokemon.moves[4] ? pokemon.moves[4].move.name : "Não há"} 
            ${pokemon.types[0].type.name}
            </p>

            

            </div>
        

        `
    )
  }
adcdesc()