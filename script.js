function Abrirlogin(){
const abrir = document.querySelector(".open")
abrir.addEventListener("click",()=>{
        document.body.insertAdjacentHTML("beforeend",`
            <div class="fundo">
                  <div class="login">
                       <h1>login</h1>
            <form class="formulario">
                <fieldset>
                    <label></label>
                    <input type="email" id="email" placeholder="digite seu email">
                    </fieldset>
                    <fieldset>
                        <input type="password" id="senha" placeholder="digite sua senha">
                </fieldset>
                
            </form>
            <p class="textcadas">caso nao tenha conta      <a href="./index2.html">cadastresse</a></p>
            <button class="close">close</button> 
             </div> 
    </div>

            `)
            const close = document.querySelector(".close")
           
            close.addEventListener("click",()=>{
               
                const wrapper = document.querySelector(".login")
                wrapper.remove()
            })
    })
}
Abrirlogin()