import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Router } from '@angular/router';
import User from './../../models/user'

@Injectable({
  providedIn: 'root'
})
export default class LoginService {
  connected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  users: User[] = [
    {
      id: 1,
      firstName: "John",
      lastName: "McClane",
      email: "john@police.nyc",
      password: "holly",
      image: "https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-04/diehardtv.jpg",
      job: "policier"
    }
  ]

  constructor(private router: Router) {

  }

  connect(event) {
    console.log("LoginService -> connect -> event", event)
    let userConnect = null
    userConnect = this.users.find(element => element.email ===  event.email && element.password === event.password )
    if (userConnect) {
      this.connected.next(true);
      this.router.navigate(["/home"]);
    } else {
      this.connected.next(false);
    }
  }
}
