import { Component, DoCheck } from '@angular/core';

//Model
import { TaskModel } from '../../model/task-model';

@Component({
  selector: 'app-activite-list',
  templateUrl: './activite-list.component.html',
  styleUrls: ['./activite-list.component.scss']
})
export class ActiviteListComponent implements DoCheck{
  
  public taskList : Array<TaskModel> = [
    {name : "teste", checked : true},
    {name : "teste", checked : true},
    {name : "teste", checked : true},
    {name : "teste", checked : true},
    {name : "teste", checked : true}
  ];

  public deleteTaskItem(index : number) : void{
    this.taskList.splice(index, 1);
  }

  public ngDoCheck(): void {
      this.taskList.sort((tFist,Tlast)=> Number(tFist.checked) - Number(Tlast.checked));
  }

  public deleteAllList() : void{
    var confirm = window.confirm("Você deseja realmente deletar todas tarefas?");
    if(confirm) this.taskList = [];
  }

  public getSubmitItemTask(event : string) : void {
    var task = {name: event, checked: false}
    this.taskList.push(task);
  }
}
