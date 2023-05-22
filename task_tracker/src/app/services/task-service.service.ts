import { Injectable } from '@angular/core';



export default interface Task{
  id:number;
  name:string;
  status:string;
  description:string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {



   tasks:Task[]=[
    {
      id:1,
      name:"Task 1",
      status:"Completed",
      description:"Description Task 1"
    }
   ]

  constructor() {}

  displaytasks(){
    return this.tasks
  }

  addtask(task:Task){
    task.id=this.tasks.length+1;
    this.tasks.push(task)
  }
  updatetask(task:Task){
    if(task.id !== 0){
      let index=this.tasks.findIndex((t_id)=>{
        t_id.id === task.id
        this.tasks[index]=task
        console.log('task updated')
      })
    }
  }

}
