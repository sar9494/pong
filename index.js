const gameBoard=document.querySelector("#gameBoard")
const ctx=gameBoard.getContext("2d")
const gameWidth=gameBoard.wigth
const gameHeight=gameBoard.height
let ballRadius=10
let ballSpeed=1
let paddleSpeed=50
const ballX=gameWidth/2
const ballY=gameHeight/2
let ballXDirection=0
let ballYDirection=0


