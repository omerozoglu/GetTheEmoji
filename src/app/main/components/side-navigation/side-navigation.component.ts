import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-side-navigation",
  templateUrl: "./side-navigation.component.html",
  styleUrls: ["./side-navigation.component.scss"]
})
export class SideNavigationComponent implements OnInit {
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
    { src: "../../../assets/emoji7.jpg", alt: "a" },
    { src: "../../../assets/emoji8.jpg", alt: "a" },
    { src: "../../../assets/emoji9.jpg", alt: "a" }
  ];
  carousels: any = [this.src1, this.src2, this.src3];

  constructor() {}

  ngOnInit() {}
}
