import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status-types',
  templateUrl: './status-types.component.html',
  styleUrls: ['./status-types.component.css']
})
export class StatusTypesComponent implements OnInit {
  order: string;
  //array
  data = [];
  constructor(private route: ActivatedRoute) {
    //query parameter
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.order = params.order;
        console.log(this.order);
        //to access data from local storage
        this.data = JSON.parse(localStorage.getItem("array"));
        //to filter
        this.data = this.data.filter(task => {
          return task.status == this.order;
        })
      })
  }

  ngOnInit(): void {

  }

}
