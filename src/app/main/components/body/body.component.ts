import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MockimgService } from "../../services/mockimg.service";
@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"]
})
export class BodyComponent implements OnInit {
  @ViewChild("body") body: ElementRef;
  @ViewChild("myCanvas") canvas: ElementRef;

  img = [];
  selectedImg = [];

  emojiGridX: any[6] = [1, 2, 3, 4, 5, 6];
  emojiGridY: any[6] = [1, 2, 3, 4, 5, 6];

  currentimg: any;
  currentCatId: number = 0;

  isSelection: boolean = false;
  isBody: boolean = true;

  constructor(private imgService: MockimgService) {}

  ngOnInit() {
    this.imgService.catID.subscribe(m => {
      if (m > 0 && this.currentCatId != m) {
        this.img = this.imgService.getImgs(m);
        this.isSelection = true;
        this.body.nativeElement.style.visibility = "hidden";
        //this.isBody = false;
        this.currentCatId = m;
      } else {
        this.isSelection = false;
        if (this.body != undefined) {
          this.body.nativeElement.style.visibility = "visible";
        } else this.isBody = true;
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
        this.body.nativeElement.style.visibility = "visible";
      }
    });
  }

  setImgId(imgid) {
    this.imgService.SetImgID(imgid);
  }

  currentImg(img) {
    this.currentimg = img;
    console.log(img);
  }

  saveSelection() {}

  clearSelection() {
    this.selectedImg = [];
  }

  increase() {
    console.log("increase");
  }

  decrease() {
    console.log("decrease");
  }
  setEmojiOnGrid(button, canvas) {
    let posX = button.getBoundingClientRect().x;
    let posY = button.getBoundingClientRect().y;
    let cnvsX = canvas.getBoundingClientRect().x;
    let cnvsY = canvas.getBoundingClientRect().y;
    let ctx = canvas.getContext("2d");
    //ctx.fillText("TEST", posX - cnvsX, posY - cnvsY);
    ctx.drawImage(this.currentimg, posX - cnvsX, posY - cnvsY);
    console.log(posX + " " + posY);
    console.log(cnvsX + " " + cnvsY);
    console.log(this.currentimg);
  }
}
