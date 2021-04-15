import { Component, ElementRef, QueryList, ViewChildren } from "@angular/core";
import { Router } from "@angular/router";
import { ImageSaveService } from "../image-save.service";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent {
  @ViewChildren("result") resultCanvases: QueryList<ElementRef>;
  readonly images$ = this.imageSaveService.images$;

  constructor(
    private imageSaveService: ImageSaveService,
    private router: Router
  ) {}

  capture(event: Event) {
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      this.imageSaveService.addImage(Date.now(), reader.result as string);
    };
    reader.readAsDataURL((event.target as HTMLInputElement).files[0]);
  }

  onDelete(id: number) {
    this.imageSaveService.removeImage(id);
  }

  onSend() {
    this.router.navigate(["success"]);
  }
}
