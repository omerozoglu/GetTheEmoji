import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
@Injectable({
  providedIn: "root"
})
export class CarouselService {
  constructor() {}

  private slideSource = new BehaviorSubject<any>("00");
  currentslide = this.slideSource.asObservable();

  currentSlide(slide: any) {
    this.slideSource.next(slide.activeId);
  }
}
