import { cellHeight, cellWidth } from "../libs/Attrs";
//通用游戏对象
export default abstract class GameObject {
    protected width:number = cellWidth-5;
    protected height:number = cellHeight-5;
    protected x:number;
    protected y:number;
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
    public abstract run(paint:CanvasRenderingContext2D):void;
    //获取地图纵坐标
    public getI():number{
        return Math.floor((this.y+this.height)/cellHeight);
    }

    //获取地图横坐标
    public getJ():number{
        return Math.floor((this.x+this.width)/cellWidth);
    }

    //获取x坐标
    public getX():number{
        return this.x;
    }
    //获取y坐标
    public getY():number{
        return this.y;
    }

    public getWidth():number{
        return this.width;
    }

    public getHeight():number{
        return this.height;
    }
    
}