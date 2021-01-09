import { cellHeight, cellWidth, GameFrame, HEIGHT, PlayerAttr, WIDTH } from "../libs/Attrs";
import Move from "../libs/MoveInterface";
import Bomb from "./Bomb";
import GameObject from "./GameObject";
import { Attachments } from "./Map";

export default class Player extends GameObject implements Move {
    public name:string = "player1"
    private player: HTMLImageElement;
    private speed = PlayerAttr.SPEED;
    private map!:Attachments[][];
    private playerRenderTimer:number = 100;
    //向下移动的动画图片
    private playerDown = ['../assets/img/players/down_01.png', '../assets/img/players/down_02.png', '../assets/img/players/down_03.png', '../assets/img/players/down_04.png'];
    //向上移动的动画图片
    private playerUp = ['../assets/img/players/up_01.png', '../assets/img/players/up_02.png', '../assets/img/players/up_03.png', '../assets/img/players/up_04.png'];
    //向左移动的动画图片
    private playerLeft = ['../assets/img/players/left_01.png', '../assets/img/players/left_02.png', '../assets/img/players/left_03.png', '../assets/img/players/left_04.png'];
    //向右移动的位置
    private playerRight = ['../assets/img/players/right_01.png', '../assets/img/players/right_02.png', '../assets/img/players/right_03.png', '../assets/img/players/right_04.png'];
    //人物动作下标
    private index: number = 0;
    constructor() {
        super(cellWidth,cellHeight);
        this.player = new Image();
        this.player.src = this.playerDown[this.index]
    }

    private render(arr:string[]):void{
        this.player.src = arr[this.index];
        this.playerRenderTimer -= GameFrame;
        if(this.playerRenderTimer<=0){
            this.index++
            if(this.index>=4){
                this.index = 0;
            }
            this.playerRenderTimer = 100;
        }
    }

    //设置玩家地图
    public setMap(map:Attachments[][]):void{
        this.map = map;
    }

    //获取地图数据
    public getMap():Attachments[][]{
        return this.map;
    }

    //按键监听
    public onKeyPress(keyCode: number): void {
        switch (keyCode) {
            case PlayerAttr.UP:
                //向上移动
                if(this.getIsMoveUp()){
                    this.moveUp();
                }
                break;
            case PlayerAttr.DOWN:
                //向下移动
                if(this.getIsMoveDown()){
                    this.moveDown();
                }
                break;
            case PlayerAttr.LEFT:
                //向左移动
                if(this.getIsMoveLeft()){
                    this.moveLeft();
                }
                break;
            case PlayerAttr.RIGHT:
                //向右移动
                if(this.getIsMoveRight()){
                    this.moveRight();
                }
                break;
            case PlayerAttr.FIRE:
                //放置炸弹
                if(this.getIsSetBomb()){
                    this.setBomb()
                }
                break;
        }
    }
    
    
    //向右移动
    public moveRight():void{
        this.x += this.speed;
        if(this.x>WIDTH-this.width-cellWidth)
            this.x = WIDTH - this.width-cellWidth;

        this.render(this.playerRight)
    }
    //向左移动
    public moveLeft():void{
        this.x -= this.speed;
        if(this.x<=cellWidth){
            this.x = cellWidth;
        }

        this.render(this.playerLeft);
        
    }

    //向上移动
    public moveUp():void{
        this.y -= this.speed;
        if(this.y<=cellHeight){
            this.y = cellHeight;
        }

        this.render(this.playerUp);
    }

    //向下移动
    public moveDown():void{
        this.y += this.speed;
        if(this.y>=HEIGHT-this.height-cellHeight){
            this.y = HEIGHT-this.height-cellHeight
        }

        this.render(this.playerDown);
    }

    public setBomb():void{
        let cell = this.map[this.getI()][this.getJ()];
        cell.Bomb = new Bomb(this.getJ()*cellWidth,this.getI()*cellHeight,this);
    }

    public getIsMoveUp():boolean{
        let i = this.getI()-1;
        let cell = this.map[i][this.getJ()];

        let up = i*cellHeight;
        if((cell.cell.type!=1&&this.y>=(up+cellHeight))||cell.Bomb){
            return false;
        }
        return true;
    }


    public getIsMoveDown():boolean{
        let i = this.getI()+1;
        let cell = this.map[i][this.getJ()];

        let down = i*cellHeight;
        if((cell.cell.type!=1&&this.y>=(down-cellHeight))||cell.Bomb){
            return false;
        }
        return true;
    }

    public getIsMoveLeft():boolean{
        let j = this.getJ()-1;
        let cell = this.map[this.getI()][j];

        let left = j*cellWidth;
        if((cell.cell.type!=1&&this.x>=(left-cellWidth))||cell.Bomb){
            return false;
        }
        return true;
    }

    public getIsMoveRight():boolean{
        let j = this.getJ()+1;
        let cell = this.map[this.getI()][j];
        let right = j*cellWidth;
        if((cell.cell.type!=1&&(this.x+cellWidth)>=right)||cell.Bomb){
            return false;
        }else{
            return true;
        }
        
    }

    public getIsSetBomb():boolean{
        let cell = this.map[this.getI()][this.getJ()];
        if(cell.Bomb&&cell.cell.type!=1){
            return false;
        }else{
            return true;
        }
    }

    

    public run(paint:CanvasRenderingContext2D):void{
        //this.paint = paint;
        paint.drawImage(this.player,this.x,this.y,this.width,this.height);
    }
}