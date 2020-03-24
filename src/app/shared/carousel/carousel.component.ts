import { Component, OnInit, Input } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent implements OnInit {
  @Input("source")
  src: any = [];

  constructor(config: NgbCarouselConfig) {
    config.interval = 0;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationIndicators = false;
  }

  ngOnInit() {}
}
