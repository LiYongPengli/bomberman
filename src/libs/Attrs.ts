export const WIDTH = 600;
export const HEIGHT = 400;

export const cellWidth = WIDTH/17;
export const cellHeight = HEIGHT/13;

//方块属性
export enum CellType{
    iron,         //铁
    lawn,         //草坪
    brick         //砖
}

//人物移动键盘码
export enum PlayerAttr{
    UP = 119,           //上
    DOWN = 115,         //下
    LEFT = 97,          //左
    RIGHT = 100,        //右
    FIRE = 32,          //放置炸弹
    SPEED = 1           //人物速度
}