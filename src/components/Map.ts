import { cellHeight, cellWidth } from "../libs/Attrs";
import Bomb from "./Bomb";
import Cell from "./Cell";
//每块地图装载的附件对象
export interface Attachments{
    //每块地图对象实例
    cell:Cell;
    //装载的炸弹
    Bomb?:Bomb;
}
export default class Map{
    private mapdata:number[][];
    private cells!:Attachments[][];
    constructor(mapdata:number[][]){
        this.mapdata = mapdata;
        this.init();
    }

    //地图初始化
    private init():void{
        this.cells = new Array<Array<Attachments>>();
        for(let i=0;i<this.mapdata.length;i++){
            this.cells[i] = [];
            for(let j=0;j<this.mapdata[i].length;j++){
                this.cells[i].push({
                    cell:new Cell(j*cellWidth,i*cellHeight,this.mapdata[i][j])
                })
            }
        }
    }
    //获取地图数据
    public getMapData():number[][]{
        return this.mapdata;
    }
    //获取地图实例
    public getMap():Attachments[][]{
        return this.cells;
    }
    //获取横坐标
    public getI(x:number):number{
        return Math.floor(x)/cellWidth
    }

    //获取横坐标
    public getj(y:number):number{
        return Math.floor(y)/cellHeight
    }

    //渲染地图
    public run(paint:CanvasRenderingContext2D):void{
        this.cells.forEach(cell=>{
            cell.forEach(item=>{
                item.cell.run(paint);
            })
        })
    }
}