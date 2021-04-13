import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ImageSaveService } from "../image-save.service";

@Component({
  selector: "app-selectedimage",
  templateUrl: "./selectedimage.component.html",
  styleUrls: ["./selectedimage.component.css"]
})
export class SelectedimageComponent {
  constructor(
    private imageSaveService: ImageSaveService,
    private router: Router
  ) {}

  capture(ev: Event) {
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      this.imageSaveService.addImage(reader.result as string);
      this.router.navigate(["gallery"]);
    };
    reader.readAsDataURL((ev.target as HTMLInputElement).files[0]);
  }
}
