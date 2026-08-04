// Barra de progresso
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const altura = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progresso = (scrollTop / altura) * 100;

    document.getElementById("progressBar").style.width = progresso + "%";
});

// Botão voltar ao topo
const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){
        topButton.style.display = "block";
    }else{
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// Modo escuro
const dark = document.getElementById("darkMode");

dark.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

});

// Animação dos cards
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.2});

cards.forEach(card=>{

card.classList.add("hidden");

observer.observe(card);

});