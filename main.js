var area = document.querySelector("#area")
var texto = document.querySelector("#texto")
var btn = document.querySelector("#botao")
var clear = document.querySelector("#clear")

var blue = document.querySelector("#blue")
var green = document.querySelector("#green")
var red = document.querySelector("#red")
var black = document.querySelector("#black")

var body = document.getElementsByTagName('body')[0]

body.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        add()
    }
})

btn.addEventListener('click', add)

clear.addEventListener('click', () => {
    area.innerHTML = ""
    texto.focus()
})

// Botões de cor

blue.addEventListener('click', () => {
    area.style = "color: blue;"
    texto.focus()
})

green.addEventListener('click', () => {
    area.style = "color: green;"
    texto.focus()
})

red.addEventListener('click', () => {
    area.style = "color: red;"
    texto.focus()
})

black.addEventListener('click', () => {
    area.style = "color: black;"
    texto.focus()
})

function add(){
    var par = document.createElement('p')
    par.innerHTML= texto.value

    area.appendChild(par)

    texto.value = ""
    texto.focus()
}
