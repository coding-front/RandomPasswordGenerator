let box = document.querySelector(".box"),
    Length = document.getElementById("Length"),
    generate = document.getElementById("btnGenerate"),
    range = document.getElementById("range"),
    showPassword = document.getElementById("showPassword"),
    copy = document.getElementById("copy");

let chars = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|:;"'<>,.?/~`;

GeneratePassword();

generate.addEventListener("click",GeneratePassword);

range.addEventListener("mousemove",()=>{
    Length.innerHTML = range.value;
});

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(showPassword.value);
    const copyed = document.createElement("div");
    copyed.id = "copyed";
    copyed.innerText = "Copyed";
    copyed.style.animation = 'show 5s linear';
    box.appendChild(copyed);
    setInterval(()=>{
        copyed.remove();
    },5000)
});

function GeneratePassword() {
    let randomNumber = '';
    for (let i = 0; i < range.value; i++) {
        randomNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    showPassword.value = randomNumber
}