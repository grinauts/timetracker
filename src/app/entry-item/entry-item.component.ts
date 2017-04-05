import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-entry-item',
  templateUrl: 'entry-item.component.html',
  styleUrls: ['entry-item.component.css']
})
export class EntryItemComponent implements OnInit {
  @Input() entry: any;
  @Output() entryClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  itemClick(value: any) {
    console.log('clicked');
    this.entryClick.emit('hello');
  }
}
