import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserlistComponent } from "./component/userlist/userlist.component";
import { AlbumlistComponent } from "./component/albumlist/albumlist.component";
import { PhotolistComponent } from "./component/photolist/photolist.component";


const routes: Routes = [
    { path: '', component: UserlistComponent },
    { path: 'albums/:id', component: AlbumlistComponent },
    { path: 'photos', component: PhotolistComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
