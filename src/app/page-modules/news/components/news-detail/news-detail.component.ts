import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'kt-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  @Input()
  data: any;
  constructor(private bsModalRef: BsModalRef) { }


  ngOnInit() {
  }
  closeDialog() {
    this.bsModalRef.hide();
  }
}
