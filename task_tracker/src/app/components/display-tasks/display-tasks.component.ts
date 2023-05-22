import { Component, OnInit } from '@angular/core';
import Task, { TaskServiceService } from 'src/app/services/task-service.service';



@Component({
  selector: 'app-display-tasks',
  templateUrl: './display-tasks.component.html',
  styleUrls: ['./display-tasks.component.css']
})
export class DisplayTasksComponent implements OnInit {

   tasks:Task[]=[]

   constructor(private taskservice:TaskServiceService){

   }
   

   ngOnInit(): void {
     this.tasks=this.taskservice.displaytasks()
   }
}
