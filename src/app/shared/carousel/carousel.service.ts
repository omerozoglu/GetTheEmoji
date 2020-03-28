import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
@Injectable({
  providedIn: "root"
})
export class CarouselService {
  constructor() {}

  private slideSource = new BehaviorSubject<any>(undefined);
  currentslide = this.slideSource.asObservable();

  currentSlide(slide: any) {
    this.slideSource.next(slide);
  }
}
