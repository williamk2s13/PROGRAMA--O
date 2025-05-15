function Login(){
    const form = document.querySelector(".login")
    form.addEventListener("submit", async(eventologin)=>{
        eventologin.preventDefault()
    const senhaLogin = document.querySelector(".senha")
    const emailLogin = document.querySelector(".email")
    const user = {
        email: emailLogin.value,
        password: senhaLogin.value
    }
    console.log(user)
    const res = await fetch("http://localhost:3001/login",
        {
            body: JSON.stringify(user),
            method: "POST",
            headers:  {
                'Content-Type':"application/json; charset=utf-8"
            }
        })
    
        if(res.status === 200){
                setTimeout(()=>{
                    localStorage.setItem("userId")
                location.href = "/pokedex"
            },3000)
    }
        })
            
        }
    
Login()