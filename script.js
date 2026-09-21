function entrar(){
    document.body.classList.remove("inicio");
document.body.classList.add("jardin-activo");

    let nombre = document.getElementById("nombre").value;

    if(nombre.trim() === ""){
        alert("Ingresa tu nombre");
        return;
    }

    document.getElementById("login").style.display = "none";
    document.getElementById("jardin").style.display = "block";

    document.getElementById("mensaje").innerHTML =
    `🌻🏵️ Para ti, ${nombre} 🏵️💛`;

    let musica = document.getElementById("musica");

    musica.volume = 0.5;

    musica.play()
    .then(() => {
        console.log("Música iniciada");
    })
    .catch(error => {
        console.log(error);
    });

    generarMariposas();
    generarParticulas();
    generarEstrellas();
    generarLuciernagas();
}
function generarLuciernagas(){

    for(let i = 0; i < 40; i++){

        const luz =
        document.createElement("div");

        luz.classList.add("firefly");

        luz.style.left =
        Math.random()*100 + "vw";

        luz.style.top =
        Math.random()*100 + "vh";

        document.body.appendChild(luz);
    }
}
function generarEstrellas(){

    for(let i = 0; i < 150; i++){

        const estrella =
        document.createElement("div");

        estrella.classList.add("star");

        estrella.style.left =
        Math.random() * 100 + "vw";

        estrella.style.top =
        Math.random() * 100 + "vh";

        estrella.style.animationDelay =
        Math.random() * 3 + "s";

        document.body.appendChild(estrella);
    }
}

function generarMariposas(){

    for(let i=0;i<8;i++){

        const b =
        document.createElement("div");

        b.className = "butterfly";

        b.innerHTML = "🦋";

        b.style.top =
        Math.random()*70 + "vh";

        b.style.animationDuration =
        (10 + Math.random()*10) + "s";

        b.style.animationDelay =
        Math.random()*5 + "s";

        document.body.appendChild(b);
    }
}

function generarParticulas(){

    for(let i=0; i<150; i++){

        const p = document.createElement("div");

        p.className = "sparkle";

        p.style.left =
        Math.random() * 100 + "vw";

        p.style.top =
        Math.random() * 100 + "vh";

        p.style.animationDelay =
        Math.random() * 3 + "s";

        document.body.appendChild(p);
    }
}
document.querySelector(".flower3")
.addEventListener("click",()=>{

    document.getElementById("carta")
    .style.display="block";

});
const fecha =
new Date().toLocaleDateString();

document.getElementById("fecha")
.innerHTML = fecha;