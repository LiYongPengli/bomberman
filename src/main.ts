import Game from "./components/Game";
import { GameFrame } from "./libs/Attrs";

//创建游戏实例
let game = new Game();

//启动游戏渲染
setInterval(()=>{game.run()},GameFrame)

//添加键盘事件进行游戏监听(按键按下)
document.onkeypress = function(e){
    game.onKeyPress(e.keyCode);
}
//按键抬起
document.onkeyup = function(){
    game.onKeyUp();
}