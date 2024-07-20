import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usercards',
  templateUrl: './usercards.component.html',
  styleUrl: './usercards.component.css'
})
export class UsercardsComponent implements OnInit {

  value:any;
  constructor(public http:HttpClient){}
  ngOnInit(): void {

    console.log("ngOnInit");
    
      this.http.get('https://randomuser.me/api/?results=60').subscribe((data)=>{
        console.log(data)
        this.value = (data as any).results;
      });
    }
}
