import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Experience } from './models/Experience';
import { Work } from './models/Work';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private api = "https://mailthis.to/Howdy";
  aboutMedesc: Observable<any>;
  shortDesc: Observable<any>;
  profilePic: Observable<any>;
  experience: Observable<any[]>;
  work: Observable<any[]>;

  constructor(private http:HttpClient, private afs:AngularFirestore) { 
    
  }

  postMessage(input:any){
    return this.http.post(this.api, input, { responseType: 'text' }).pipe(
      map( (response) => {
          if(response)
            return response;
        },
        (error) => {
          return error;
        }
      )
    )
  }

  getaboutMeData(){
    this.aboutMedesc = this.afs.collection("home").doc("aboutMe").valueChanges();
    return this.aboutMedesc;
  }

  getshortDescription(){
    this.shortDesc = this.afs.collection("home").doc("shortDesc").valueChanges();
    return this.shortDesc;
  }

  getExperienceList(){
    this.experience = this.afs.collection('experience').valueChanges();
    return this.experience;
  }

  getWorkList(){
    this.work = this.afs.collection('work').valueChanges();
    return this.work;
  }

  getProfileImage(){
    this.profilePic = this.afs.collection('home').doc('profilePic').valueChanges();
    return this.profilePic;
  }
}