import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-side-navigation",
  templateUrl: "./side-navigation.component.html",
  styleUrls: ["./side-navigation.component.scss"]
})
export class SideNavigationComponent implements OnInit {
  currentSlideID: string;

  src1: any = [
    { src: "../../../assets/emoji1.jpg", alt: "a" },
    { src: "../../../assets/emoji2.jpg", alt: "a" }
  ];
  src2: any = [
    { src: "../../../assets/emoji3.jpg", alt: "a" },
    { src: "../../../assets/emoji4.jpg", alt: "a" },
    { src: "../../../assets/emoji5.jpg", alt: "a" },
    { src: "../../../assets/emoji6.jpg", alt: "a" }
  ];
  src3: any = [
    {
      src: "../../../assets/hands/icons8-left-facing-fist-emoji-50.png",
      alt: "a"
    },
    {
      src:
        "../../../assets/hands/icons8-backhand-index-pointing-right-emoji-50.png",
      alt: "a"
    },
    {
      src: "../../../assets/hands/icons8-nikita-clapping-hands-emoji-50.png",
      alt: "a"
    }
  ];
  carousels: any = [this.src1, this.src2, this.src3];

  constructor() {}

  ngOnInit() {}

  getSlideId($event) {
    this.currentSlideID = $event;
  }
}
