import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SelectedimageComponent } from "./selectedimage/selectedimage.component";
import { ImageSaveService } from "./image-save.service";
import { AppRoutingModule } from "./app.routing.module";
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, SelectedimageComponent, GalleryComponent],
  bootstrap: [AppComponent],
  providers: [ImageSaveService]
})
export class AppModule {}
