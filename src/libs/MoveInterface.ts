//可移动的游戏对象
export default interface Move{
    getIsMoveRight():boolean;
    getIsMoveLeft():boolean;
    getIsMoveDown():boolean;
    getIsMoveUp():boolean;
    moveDown():void;
    moveUp():void;
    moveLeft():void;
    moveRight():void;
}