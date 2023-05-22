import { Component } from '@angular/core';
import Task, { TaskServiceService } from 'src/app/services/task-service.service';




@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent {


    task:Task={
      id:0,
      name:'',
      status:'',
      description:''
    }
      
    
    constructor(private taskservice:TaskServiceService){
      
    }

    addtask(){
      if (this.task.name === '' || this.task.description === '') {
          alert('please add a task')
          console.log('no task added')
      } else {
        this.taskservice.addtask(this.task)
        this.task={
          id:0,
          name:'',
          description:'',
          status:''
        }
      }
      
    }
}
