import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { first } from "rxjs/operators";

interface Entry {
  id: number;
  image: string;
}

@Injectable()
export class ImageSaveService {
  readonly images$ = new BehaviorSubject<Entry[]>([]);

  addImage(id: number, image: string): void {
    this.images$
      .pipe(first())
      .subscribe(images => this.images$.next([...images, { id, image }]));
  }

  removeImage(id: number): void {
    this.images$
      .pipe(first())
      .subscribe(images =>
        this.images$.next(images.filter(entry => entry.id !== id))
      );
  }
}
