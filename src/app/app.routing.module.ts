import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HelloComponent } from "./hello.component";
import { SelectedimageComponent } from "./selectedimage/selectedimage.component";
import { GalleryComponent } from "./gallery/gallery.component";

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: "image", component: SelectedimageComponent },
      { path: "gallery", component: GalleryComponent },
      { path: "", component: HelloComponent }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
