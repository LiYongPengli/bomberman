import Game from "./components/Game";

let game = new Game();

setInterval(()=>{game.run()},10)

document.onkeypress = function(e){
    game.onKeyPress(e.keyCode);
}

document.onkeyup = function(){
    game.onKeyUp();
}