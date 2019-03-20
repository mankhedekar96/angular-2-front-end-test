import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users:any[];

  constructor(private http:HttpService) { }

  ngOnInit() {
    this.http.get('users').subscribe((res)=>{
      this.users = res;
    });
  }

  goToAlbums(user:any){
    this.http.get('albums/'+user.id).subscribe((res)=>{
      console.log(res)
    });
  }

}
