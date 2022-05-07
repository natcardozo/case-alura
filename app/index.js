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
    }
]

const cursos = document.querySelector(".cursos__lista");

function listarCursos() {
    listaCursos.map(curso => {
        cursos.innerHTML += `<div class="card">
            <div class="card__info">
                <img class="card__imagem" src="${curso.imagem}" alt="${curso.nome}">
                <h3 class="card__titulo">${curso.nome}</h3>
            </div>
            <div class="card__extra">
                <p class="card__duracao">${curso.carga}</p>
            </div>
        </div>`
    })
}

listarCursos()
