import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'kt-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.scss']
})
export class SubjectDetailComponent implements OnInit {
  @Input()
  data: any;
  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  closeDialog() {
    this.bsModalRef.hide();
  }
}
