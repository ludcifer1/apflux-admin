import { Component, OnInit } from '@angular/core';
import { StudentStoreService } from '@app/root-store/store-services-manager/retailer-info.store.service';

@Component({
  selector: 'r-time-table',
  templateUrl: './r-time-table.component.html',
  styleUrls: ['./r-time-table.component.scss']
})
export class RTimeTableComponent implements OnInit {

  constructor(
    private stdStoreService: StudentStoreService,

  ) { }

  ngOnInit() {
    
  }
  getTimeTable(){
    return this.stdStoreService.getTimeTable()
  }
}
