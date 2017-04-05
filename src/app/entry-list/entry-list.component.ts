import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EntryService } from '../services/entry.service';
import { ProjectService } from '../services/project.service';

@Component( {
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: [ './entry-list.component.css' ],
  providers: [EntryService]
} )
export class EntryListComponent implements OnInit {

  entries;
  projects;
  @Output() entryRequest = new EventEmitter();

  constructor(private entryService: EntryService, private projectService: ProjectService) {

  }

  ngOnInit() {
    this.entries = this.entryService.fecthAll();
    this.projects = this.projectService.fetchAll();
  }

  handleClick( value: any ) {
    console.log(value);
  }

  addEntry() {
    this.entryRequest.emit();
  }

}
