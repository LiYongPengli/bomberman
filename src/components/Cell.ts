import { cellHeight, CellType, cellWidth } from "../libs/Attrs";
import GameObject from "./GameObject";

export default class Cell extends GameObject{
    public type:number;
    private cell:HTMLImageElement;
    constructor(x:number,y:number,type:number){
        super(x,y);
        this.type = type;
        this.cell = new Image();
        switch(type){
            case CellType.iron:
                this.cell.src="../assets/img/wall.png";
                break;
            case CellType.lawn:
                this.cell.src="../assets/img/floor.png";
                break;
            case CellType.brick:
                this.cell.src="../assets/img/obstacle.png";
                break;
        }
    }
    public run(paint:CanvasRenderingContext2D):void{
        paint.drawImage(this.cell,this.x,this.y,cellWidth,cellHeight);
    }
    
}