function ampliar(){

    let modal = document.querySelector(".modal")
    let janela_escura = document.querySelector(".janela_escura")

    modal.style.visibility="visible";
    modal.style.animationName = "animate";
    janela_escura.style.visibility="visible";
}

function fechar(){

    let modal = document.querySelector(".modal")
    modal.style.visibility="hidden";
    modal.style.animationName = "none"; /*para a execução da animação*/

    let janela_escura = document.querySelector(".janela_escura")
    janela_escura.style.visibility="hidden";
}
