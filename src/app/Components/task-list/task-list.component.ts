import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(public taskService:TaskService) { }

  ngOnInit(): void {
  }
  onStrikeout(index: number) {
this.taskService.tasks[index].strikeoutStatus = true;
console.log(this.taskService.tasks)
}
}
