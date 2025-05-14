
import {cores} from "./cores.js"
let offset = 0
async function initPokedex(){
    const ul = document.querySelector(".pokemons")
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=16`,{
        headers: {
            "Content-type":"application/json; charset=utf-8"
        }
    })
    const response = await res.json()
    console.log(response,"response")
    const listPokemon = response.results
    for(let item of listPokemon){
        const data = await fetch(item.url,{
            headers: {
                "Content-type":"application/json; charset=utf-8"
            }
        })
        const dados = await data.json()
        ul.insertAdjacentHTML("beforeend",`
            <li id=${item.name} style="background-color:${cores[dados.types[0].type.name]}">
            <div class="ola">
            <p>${item.name}</p>
            <button id="${item.name}desc" class="descricao">descriçao</button>
            </div>
            <img class="imgpoke" src="${dados.sprites.other.dream_world.front_default}">
            </li>
            `)
            const descricao = document.getElementById(`${item.name}desc`)
            console.log(descricao,"button")
           descricao.addEventListener("click",()=>{
            console.log("desc")
            console.log(dados,"dados")
            localStorage.setItem("pokemon",JSON.stringify(dados))
               location.href = "/descricao"
           })
        } 
        const prevBtn = document.querySelector("#preve")
        
        const btnNext = document.querySelector("#nexte")
        btnNext.addEventListener("click",()=>{
            offset = offset+20
            prevBtn.removeAttribute("disabled")
            nextPage()
        })
        prevBtn.addEventListener("click",()=>{
            offset = offset-20
            if(offset===0){
                prevBtn.setAttribute("disabled",true)
            }
            nextPage()
        })
        prevBtn.setAttribute("disabled",true)
        
    }
    initPokedex()
    async function nextPage(){
    const ul = document.querySelector(".pokemons")
    ul.innerHTML = ""
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=16`,{
        headers: {
            "Content-type":"application/json; charset=utf-8"
        }
    })
    const response = await res.json()
    // console.log(response,"response")
    const listPokemon = response.results
    for(let item of listPokemon){
        const data = await fetch(item.url,{
            headers: {
                "Content-type":"application/json; charset=utf-8"
            }
        })
        const dados = await data.json()
        ul.insertAdjacentHTML("beforeend",`
                   <li id=${item.name} style="background-color:${cores[dados.types[0].type.name]}">
             <div class="ola">
            <p>${item.name}</p>
            <button id="${item.name}desc" class="descricao">descriçao</button>
            </div>
                <div class="imgpoke">
              <img src="${dados.sprites.other.dream_world.front_default}"> 
                </div>
            </li>
            `)
            const descricao = document.getElementById(`${item.name}desc`)
            console.log(descricao,"button")
           descricao.addEventListener("click",()=>{
            console.log("desc")
            console.log(dados,"dados")
            localStorage.setItem("pokemon",JSON.stringify(dados))
               location.href = "/descricao"
           })            
           }
    }

// nextPage()