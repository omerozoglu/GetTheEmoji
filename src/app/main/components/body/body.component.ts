import { Component, OnInit } from "@angular/core";
import { CarouselService } from "src/app/shared/carousel/carousel.service";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"]
})
export class BodyComponent implements OnInit {
  constructor(private carouselService: CarouselService) {}
  currentSlide: any;

  ngOnInit() {
    this.carouselService.currentslide.subscribe(slide => {
      this.currentSlide = slide;
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
