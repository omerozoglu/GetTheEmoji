import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { CarouselService } from "./carousel.service";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent implements OnInit {
  /*
   * Parent > child
   */
  @Input("source")
  src: any = [];

  /*
   * Child > parent
   */
  @Output("slideid")
  slideID = new EventEmitter<string>();

  currentSlide: any;

  constructor(
    private config: NgbCarouselConfig,
    private carouselService: CarouselService
  ) {
    this.config.interval = 0;
    this.config.wrap = true;
    this.config.keyboard = false;
    this.config.pauseOnHover = false;
    this.config.showNavigationIndicators = false;
  }
  onSlideClicked(value: any) {
    this.slideID.emit(value);
    this.carouselService.currentSlide(value);
  }

  ngOnInit() {
    this.carouselService.currentslide.subscribe(
      slide => (this.currentSlide = slide)
    );
  }
}
