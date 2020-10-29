import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Details } from '../models/Details';
import { Experience } from '../models/Experience';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  aboutMeData: Details;
  shortDescription: Details;
  experience: Experience[];
  profilePic: Details;

  constructor(private serv:ServicesService) { }

  ngOnInit(): void {
    this.serv.getaboutMeData().subscribe( data => {
      this.aboutMeData = data;
    });
    this.serv.getshortDescription().subscribe( data => {
      this.shortDescription = data;
    });
    this.serv.getExperienceList().subscribe(data => {
      this.experience = data;
    });
    this.serv.getProfileImage().subscribe(data => {
      this.profilePic = data;
    })
  }

}
