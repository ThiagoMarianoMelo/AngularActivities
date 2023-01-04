import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-input-add-itens',
  templateUrl: './input-add-itens.component.html',
  styleUrls: ['./input-add-itens.component.scss']
})
export class InputAddItensComponent {

  @Output() public emitItemTask = new EventEmitter();

  public addItemTask : string = "";

  public submitItemTask() : void{
    var varTaskWrited = this.addItemTask.trim();
    //Test if is equal spaces or null
    if(!varTaskWrited) return;
    this.emitItemTask.emit(this.addItemTask);
    this.addItemTask = ""
  }
  
}
