import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ImageSaveService {
  readonly images$ = new BehaviorSubject<string[]>([]);

  addImage(image: string): void {
    this.images$.next([...this.images$.getValue(), image]);
  }
}
