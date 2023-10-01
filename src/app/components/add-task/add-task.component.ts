import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask:boolean = false;
  subscription:Subscription = new Subscription();
  
  @Output() onSubmitTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService){
    this.subscription = this.uiService.onToggle().subscribe((toggle)=>this.showAddTask = toggle) ;
  }

  onSubmit(){
    if(!this.text){
      alert("Please Add the reminder!");
    }

    const newTask:Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    console.log("hi");
    this.onSubmitTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
