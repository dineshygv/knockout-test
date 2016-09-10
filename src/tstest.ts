import * as $ from "jquery";
import * as ko from "knockout";

export default class Test{
    private id:Number;
    constructor(public name:string){
        
    }
    sayName() {
        this.id=20;
    }
}