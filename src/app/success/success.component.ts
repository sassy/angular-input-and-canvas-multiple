import { LocationStrategy } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-success",
  templateUrl: "./success.component.html",
  styleUrls: ["./success.component.css"]
})
export class SuccessComponent {
  constructor(private locationStrategy: LocationStrategy) {
    locationStrategy.onPopState(() => {
      return false;
    });
  }
}
