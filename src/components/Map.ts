import { cellHeight, cellWidth } from "../libs/Attrs";
import Cell from "./Cell";

export default class Map{
    private mapdata:number[][];
    private cells!:Cell[][];
    constructor(mapdata:number[][]){
        this.mapdata = mapdata;
        this.init();
    }

    //地图初始化
    private init():void{
        this.cells = new Array<Array<Cell>>();
        for(let i=0;i<this.mapdata.length;i++){
            this.cells[i] = [];
            for(let j=0;j<this.mapdata[i].length;j++){
                this.cells[i].push(new Cell(j*cellWidth,i*cellHeight,this.mapdata[i][j]))
            }
        }
    }
    //获取地图数据
    public getMapData():number[][]{
        return this.mapdata;
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
                item.run(paint);
            })
        })
    }
}