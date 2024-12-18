const startElement = document.getElementById("start");
const startPage = document.createElement("div");
startPage.id = "container";

const gameName = document.createElement("h1");
gameName.innerText = "PONG";
gameName.id = "gameName";

startPage.appendChild(gameName);
startElement.appendChild(startPage);

const onePlayerButton=document.createElement("button")
const twoPlayerButton=document.createElement("button")
onePlayerButton.className="playerNumber"
twoPlayerButton.className="playerNumber"


const logIn = document.createElement("div");
logIn.className = "login";
const headerLogin = document.createElement("h3");
headerLogin.id = "gameName";
headerLogin.innerText = "LOGIN"
logIn.appendChild(headerLogin)
startPage.appendChild(logIn);
