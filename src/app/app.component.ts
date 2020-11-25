import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "My-To-Do-List";
  selectedPriority: string = '';
  selectedStatus: string = ''
  todos: any = [];
  todoList: FormGroup;
  constructor(private fb: FormBuilder) { }
  //To add new to do
  add(newTodoName, prior) {
    var newTodo = {
      task: newTodoName,
      status: 'pending',
      priority: prior

    };
    if (this.todos == 'null') {
      this.todos.push({ task: 'No task' });
    }

    this.todos.push(newTodo);
    //Add data to local storage
    localStorage.setItem('array', JSON.stringify(this.todos))
  }
  ngOnInit() {
    this.todoList = this.fb.group({ Task: ['', Validators.required], Priority: ['', Validators.required] })
    if (localStorage.getItem("array")) {
      // To access data from local storage
      this.todos = JSON.parse(localStorage.getItem("array"));
    }

  }

  // for status
  selectChangeStatus(event: any, index) {

    this.todos[index].status = event.target.value
    localStorage.setItem("array", JSON.stringify(this.todos));
  }
  get Task() {
    return this.todoList.get('Task');
  }
  get Priority() {
    return this.todoList.get('Priority');
  }

}  
