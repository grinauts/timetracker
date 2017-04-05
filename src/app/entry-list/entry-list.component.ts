import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component( {
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: [ './entry-list.component.css' ]
} )
export class EntryListComponent implements OnInit {

  @Output() entryRequest = new EventEmitter();

  entries = [
    {
      project_name: 'First Project',
      task_name: 'Main Task',
      hours: 9
    },
    {
      project_name: 'Second Project',
      task_name: 'Main Task',
      hours: 8
    },
    {
      project_name: 'Third Project',
      task_name: 'Main Task',
      hours: 2
    },
    {
      project_name: 'Fourth Project',
      task_name: 'Main Task',
      hours: 5
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  handleClick( value: any ) {
    console.log(value);
  }

  addEntry() {
    this.entryRequest.emit();
  }

}
