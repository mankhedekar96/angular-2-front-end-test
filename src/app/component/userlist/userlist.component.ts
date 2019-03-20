import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AppSettings } from 'src/app/app.settings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users: any[];

  constructor(private http: HttpService,
    private router: Router) { }

  ngOnInit() {
    this.http.get('users').subscribe((res: any[]) => {
      this.users = res;
    });
  }

  goToAlbums(user: any) {
    console.log(user);
    this.router.navigate(['/albums/'+user.id])
  }

}
