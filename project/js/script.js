let btn = document.querySelector ('#senha1')
btn.addEventListener ('click', ()=> {
    let inputSenha = document.querySelector ('#senha')
    if (inputSenha.getAttribute('type') === 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute ('type', 'password')
    }
})

let btn1 = document.querySelector ('#senha2')
btn1.addEventListener ('click', ()=> {
    let inputSenha1 = document.querySelector ('#senha_1')
    if (inputSenha1.getAttribute('type') === 'password') {
        inputSenha1.setAttribute('type', 'text')
    } else {
        inputSenha1.setAttribute ('type', 'password')
    }
})

let btn2 = document.querySelector ('#senha3')
btn2.addEventListener ('click', ()=> {
    let inputSenha2 = document.querySelector ('#senha_2')
    if (inputSenha2.getAttribute('type') === 'password') {
        inputSenha2.setAttribute('type', 'text')
    } else {
        inputSenha2.setAttribute ('type', 'password')
    }
})