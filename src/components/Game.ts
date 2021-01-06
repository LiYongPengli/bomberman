import { level1 } from '../libs/MapData';
import Bomb from './Bomb';
import Map from './Map'
import Player from './Player';
export default class Game{
    private map!:Map;
    private player!:Player;
    private bomb!:Bomb;
    private paint:CanvasRenderingContext2D;
    //按键是否被按下
    private keydown:boolean = false;
    private keyCode!:number;
    constructor(){
        let canvas = <HTMLCanvasElement>document.getElementById('mainMap');
        this.paint = <CanvasRenderingContext2D>canvas.getContext('2d');
        this.initMap();
        this.initPlayer();
    }

    //初始化地图
    private initMap():void{
        this.map = new Map(level1);
    }

    private initPlayer():void{
        this.player = new Player();
        this.player.setMap(this.map.getMap());
    }

    public onKeyPress(keyCode:number):void{
        this.keyCode = keyCode;
        this.keydown = true;
    }

    public onKeyUp():void{
        this.keydown = false;
    }

    //挂载所有游戏组件
    public run():void{
        this.map.run(this.paint);
        this.player.run(this.paint);
        if(this.keydown){
            this.player.onKeyPress(this.keyCode);
        }
    }
}