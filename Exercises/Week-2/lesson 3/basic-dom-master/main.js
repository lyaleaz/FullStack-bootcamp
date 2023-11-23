console.log("document")
const playingField = document.getElementById("playing-field")
console.log(playingField)
const down = document.getElementById("down")
console.log(down)
console.log(down.innerHTML)
down.innerHTML = "Down"

playingField.style.backgroundColor = 'blue'

/*
const moveRight = function(){
    const ball = document.getElementById("ball")
    let left = parseInt(ball.style.left) || 0
    left += 15
    ball.style.left = left + "px"
}
console.log(moveRight)

const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by: ~The Creator~"
subHeader.setAttribute("class", "sub-header")
document.body.appendChild(subHeader)*/


const box = document.getElementById("ball")

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#27ae60"
    box.innerHTML = "Hover over me!"
}
const moveRight = function(){
    const ball = document.getElementById("ball")
    let left =parseInt(ball.style.left) || 0
    left+=15
    ball.style.left = left +"px"
}

const moveLeft = function()
{
    const ball = document.getElementById("ball")
    let right =parseInt(ball.style.left) || 0
    right-=15
    ball.style.left = right +"px" 
}
const moveUp = function()
{
    const ball = document.getElementById("ball")
    let down =parseInt(ball.style.top) || 0
    down-=15
    ball.style.top = down +"px" 
}
const moveDown = function()
{
    const ball = document.getElementById("ball")
    let up =parseInt(ball.style.top) || 0
    up+=15
    ball.style.top = up +"px" 
}

