
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
tasks:any= [{}];
strikeoutStatus:boolean=false;
  constructor() { }
}
