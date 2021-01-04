import GameObject from "./GameObject";
import Player from "./Player";

export default class Bomb extends GameObject{
    private bomb:HTMLImageElement;
    //炸弹的来源
    private from:Player;
    constructor(x:number,y:number,player:Player){
        super(x,y);
        this.from = player;
        this.bomb = new Image();
        this.bomb.src = '../assets/img/bomb_01.png';
    }

    //获取该炸弹的释放者
    public getPlayer():Player{
        return this.from;
    }

    //渲染炸弹动画
    public run(paint: CanvasRenderingContext2D): void {
        paint.drawImage(this.bomb,this.x,this.y,this.width,this.height);
    }

}