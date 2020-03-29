import { Component, OnInit } from "@angular/core";
import { MockimgService } from "../../services/mockimg.service";
@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"]
})
export class BodyComponent implements OnInit {
  constructor(private imgService: MockimgService) {}
  img = [];
  ngOnInit() {
    this.imgService.catID.subscribe(m => {
      this.img = this.imgService.getImgs(m);
    });
  }

  increase() {
    console.log("increase");
  }
  decrease() {
    console.log("decrease");
  }
  clear() {
    console.log("clean");
  }
}
