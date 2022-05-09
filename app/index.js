const listaCursos = [
    {
        imagem: "assets/img/icone-curso-azul.svg",
        nome: "Rebranding: adaptando sua marca às mudanças",
        carga: "6h"
    },
    {
        imagem: "assets/img/icone-curso-rosa.svg",
        nome: "Rebranding: adaptando sua marca às mudanças",
        carga: "6h"
    },
    {
        imagem: "assets/img/icone-curso-verde.svg",
        nome: "Rebranding: adaptando sua marca às mudanças",
        carga: "6h"
    },
    {
        imagem: "assets/img/icone-curso-laranja.svg",
        nome: "Rebranding: adaptando sua marca às mudanças",
        carga: "6h"
    },
    {
        imagem: "assets/img/icone-curso-azul.svg",
        nome: "Rebranding: adaptando sua marca às mudanças",
        carga: "6h"
    },
    {
        imagem: "assets/img/icone-curso-verde.svg",
        nome: "Rebranding: adaptando sua marca às mudanças",
        carga: "6h"
    },
    {
        imagem: "assets/img/icone-curso-azul.svg",
        nome: "Rebranding: adaptando sua marca às mudanças",
        carga: "6h"
    },
    {
        imagem: "assets/img/icone-curso-verde.svg",
        nome: "Rebranding: adaptando sua marca às mudanças",
        carga: "6h"
    },
    {
        imagem: "assets/img/icone-curso-azul.svg",
        nome: "Rebranding: adaptando sua marca às mudanças",
        carga: "6h"
    },
    {
        imagem: "assets/img/icone-curso-verde.svg",
        nome: "Rebranding: adaptando sua marca às mudanças",
        carga: "6h"
    },
    {
        imagem: "assets/img/icone-curso-azul.svg",
        nome: "Rebranding: adaptando sua marca às mudanças",
        carga: "6h"
    },
    {
        imagem: "assets/img/icone-curso-verde.svg",
        nome: "Rebranding: adaptando sua marca às mudanças",
        carga: "6h"
    }
]

const cursos = document.querySelector(".cursos__lista__conteudo");

function listarCursos() {
    listaCursos.map(curso => {
        cursos.innerHTML += `
            <div class="card">
                <div class="card__info">
                    <img class="card__imagem" src="${curso.imagem}" alt="${curso.nome}">
                    <h3 class="card__titulo">${curso.nome}</h3>
                </div>
                <div class="card__extra">
                    <p class="card__duracao">${curso.carga}</p>
                </div>
            </div>
        `
    })
}

listarCursos();

const gap = 16;
const listaDeCursos = document.querySelector(".cursos__lista");
const proximo = document.querySelector(".proximo");
const anterior = document.querySelector(".anterior");

proximo.addEventListener("click", e => {
    listaDeCursos.scrollBy(width + gap, 0);
});
anterior.addEventListener("click", e => {
    listaDeCursos.scrollBy(-(width + gap), 0);63
});

let width = listaDeCursos.offsetWidth;
window.addEventListener("resize", e => (width = listaDeCursos.offsetWidth));
