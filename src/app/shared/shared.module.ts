import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedComponent } from "./shared.component";
import { CarouselComponent } from "../shared/carousel/carousel.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [SharedComponent, CarouselComponent],
  imports: [CommonModule, NgbModule],
  exports: [SharedComponent, CarouselComponent]
})
export class SharedModule {}
