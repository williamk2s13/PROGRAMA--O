function GetUser() {
  const form = document.querySelector("#registerform");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.querySelector("#email");
    const pass = document.querySelector("#senha");
    console.log(email.value, pass.value);
    const obj = {
      email: email.value,
      password: pass.value,
    };
    const res = await fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    if (res.status === 201) {
      localStorage.setItem("userId", userId);
      location.href = "/login";
    }
  });
}
GetUser();
