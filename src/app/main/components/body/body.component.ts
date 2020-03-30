import { Component, OnInit } from "@angular/core";
import { MockimgService } from "../../services/mockimg.service";
@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"]
})
export class BodyComponent implements OnInit {
  img = [];
  currentCatId: number = 0;
  selectedImg = [];
  isSelection: boolean = false;
  isBody: boolean = true;

  constructor(private imgService: MockimgService) {}

  ngOnInit() {
    this.imgService.catID.subscribe(m => {
      if (m > 0 && this.currentCatId != m) {
        this.img = this.imgService.getImgs(m);
        this.isSelection = true;
        this.isBody = false;
        this.currentCatId = m;
      } else {
        this.isSelection = false;
        this.isBody = true;
        this.currentCatId = 0;
      }
    });

    this.imgService.imgID.subscribe(m => {
      if (m > 0) {
        if (
          !this.selectedImg.includes(this.imgService.getImgById(m)) &&
          this.selectedImg.filter(
            i => i.catId == this.imgService.getImgById(m).catId
          ).length < 3 &&
          this.selectedImg.length < 5
        )
          this.selectedImg.push(this.imgService.getImgById(m));
        this.isSelection = false;
        this.isBody = true;
      }
    });
  }
  setImgId(imgid) {
    this.imgService.SetImgID(imgid);
  }
  nextBody() {
    this.selectedImg.push({ imgId: 0, catId: 0, src: "" });
    this.selectedImg.forEach(i => {
      this.imgService.SetImgID(i.imgId);
      console.log(i);
    });
  }

  clearSelection() {
    this.selectedImg = [];
  }

  increase() {
    console.log("increase");
  }

  decrease() {
    console.log("decrease");
  }
}
