import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photolist',
  templateUrl: './photolist.component.html',
  styleUrls: ['./photolist.component.css']
})
export class PhotolistComponent implements OnInit {


  photos: any[];
  constructor(private http: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.getPhotos();
  }

  ngOnInit() {
  }

  getPhotos() {
    this.http.get('photos').subscribe((res: any[]) => {
      console.log(res.slice(0, 5));
      this.photos = res.slice(0, 5)
    });
  }

}
