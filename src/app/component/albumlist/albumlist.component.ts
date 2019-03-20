import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albumlist',
  templateUrl: './albumlist.component.html',
  styleUrls: ['./albumlist.component.css']
})
export class AlbumlistComponent implements OnInit {

  user: any
  albumList: any;
  constructor(private http: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.activatedRoute.params.subscribe((res) => {
      console.log(res);
      this.user = res
      this.getAlbums(res.id);
    });

  }

  ngOnInit() {

  }

  getAlbums(id) {
    this.http.get('albums/' + 3).subscribe((res) => {
      console.log(res);
      this.albumList = res;
    });
  }

  checkPhotos() {
    this.router.navigate(['/photos'])
  }

}
