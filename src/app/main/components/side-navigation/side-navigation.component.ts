import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { MockimgService } from "../../services/mockimg.service";

@Component({
  selector: "app-side-navigation",
  templateUrl: "./side-navigation.component.html",
  styleUrls: ["./side-navigation.component.scss"]
})
export class SideNavigationComponent implements OnInit {
  /*
   * Mock category
   */
  categories: any[] = [
    { catId: 1, name: "ear" },
    { catId: 2, name: "eye" },
    { catId: 3, name: "hair" },
    { catId: 4, name: "hand" },
    { catId: 5, name: "head" },
    { catId: 6, name: "heart" },
    { catId: 7, name: "mouth" },
    { catId: 8, name: "nose" },
    { catId: 9, name: "other" }
  ];

  constructor(private imgService: MockimgService) {}

  ngOnInit() {}

  trackByFn(index: number, item: any): number {
    return item.catId;
  }

  openCatImgs(catId: number) {
    this.imgService.SetCatID(catId);
  }

  getCatImg(catId: number): any {
    return this.imgService.getImgs(catId)[0].src;
  }
}
