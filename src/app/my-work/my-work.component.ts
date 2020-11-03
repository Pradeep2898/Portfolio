import { Component, OnInit } from '@angular/core';
import { Work } from '../models/Work';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit {

  work:Work[];

  constructor(private serv:ServicesService) { }

  ngOnInit(): void {
    this.serv.getWorkList().subscribe(data => {
      this.work = data;
    });
    this.serv.getThumbnail();
  }

}
