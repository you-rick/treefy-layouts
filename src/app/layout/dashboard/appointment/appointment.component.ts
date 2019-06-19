import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, { windowClass: 'repeat-service'});
  }


  ngOnInit() {
  }

}
