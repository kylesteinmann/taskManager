import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';



@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css'],
})
export class TaskInputComponent implements OnInit {
  task = "";
  constructor(public taskService: TaskService) {}

  ngOnInit(): void {}

  onAddTask() {
    this.taskService.tasks.push({task:this.task, strikeoutStatus:false});
    this.task = ""
  }
}
