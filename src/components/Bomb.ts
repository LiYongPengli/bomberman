import { cellHeight, cellWidth, GameFrame } from "../libs/Attrs";
import GameObject from "./GameObject";
import Player from "./Player";

export default class Bomb extends GameObject {
    private bomb: HTMLImageElement;
    //爆炸等级
    private bombLevel: number = 1;
    //炸弹爆炸定时器(定时5秒爆炸)
    private timer: number = 5000;
    private render_timer = 500;
    //炸弹的来源
    private from: Player;

    //炸弹ui
    private bombUI: string[] = ['../assets/img/bomb_01.png', '../assets/img/bomb_02.png', '../assets/img/bomb_03.png', '../assets/img/bomb_04.png'];

    private bombIndex: number = 0;

    private bombTop: string[] = ['../assets/img/Booms/up_01.png', '../assets/img/Booms/up_02.png', '../assets/img/Booms/up_03.png', '../assets/img/Booms/up_04.png']
    private bombMiddle: string[] = ['../assets/img/Booms/middle_01.png', '../assets/img/Booms/middle_02.png', '../assets/img/Booms/middle_03.png', '../assets/img/Booms/middle_04.png']
    private bombLeft: string[] = ['../assets/img/Booms/left_01.png', '../assets/img/Booms/left_02.png', '../assets/img/Booms/left_03.png', '../assets/img/Booms/left_04.png']
    private bombDown: string[] = ['../assets/img/Booms/down_01.png', '../assets/img/Booms/down_02.png', '../assets/img/Booms/down_03.png', '../assets/img/Booms/down_04.png']
    private bombRight: string[] = ['../assets/img/Booms/right_01.png', '../assets/img/Booms/right_02.png', '../assets/img/Booms/right_03.png', '../assets/img/Booms/right_04.png']

    constructor(x: number, y: number, player: Player) {
        super(x, y);
        this.from = player;
        this.bomb = new Image();
    }

    private render(): void {
        this.bomb.src = this.bombUI[this.bombIndex];
        this.render_timer -= GameFrame;
        if (this.render_timer <= 0) {
            this.bombIndex++
            if (this.bombIndex >= 4) {
                this.bombIndex = 0;
            }
            this.render_timer = 500;
        }
    }

    //获取该炸弹的释放者
    public getPlayer(): Player {
        return this.from;
    }

    //炸弹爆炸
    public toBomb(paint: CanvasRenderingContext2D): void {
        switch (this.bombLevel) {
            case 1:
                if (this.bomb_leve1(paint))
                    //delete this.from.getMap()[this.getI()][this.getJ()].Bomb;
                break;
        }


    }

    private bomb_leve1(paint: CanvasRenderingContext2D): boolean {
        

        return false;
    }

    //渲染炸弹动画
    public run(paint: CanvasRenderingContext2D): void {
        this.render();
        if (this.timer <= 0) {
            this.toBomb(paint);
        } else {
            paint.drawImage(this.bomb, this.x, this.y, this.width, this.height);
            this.timer -= GameFrame;
        }
    }

}