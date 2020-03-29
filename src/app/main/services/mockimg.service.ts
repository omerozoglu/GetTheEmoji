import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MockimgService {
  /*
   *  Mock img
   */

  img: any[] = [
    {
      imgId: 1,
      catId: 1,
      src: "../../../../assets/hands/icons8-folded-hands-emoji-50.png"
    },
    {
      imgId: 2,
      catId: 2,
      src: "../../../assets/hands/icons8-crossed-fingers-emoji-50.png"
    },
    {
      imgId: 3,
      catId: 3,
      src: "../../../../assets/hands/icons8-index-pointing-up-emoji-50.png"
    },
    {
      imgId: 4,
      catId: 4,
      src: "../../../../assets/hands/icons8-call-me-hand-emoji-50.png"
    },
    {
      imgId: 5,
      catId: 5,
      src: "../../../../assets/hands/icons8-left-facing-fist-emoji-50.png"
    },
    {
      imgId: 6,
      catId: 6,
      src: "../../../../assets/hands/icons8-sign-of-the-horns-emoji-50.png"
    },
    {
      imgId: 7,
      catId: 7,
      src: "../../../../assets/hands/icons8-thumbs-down-emoji-50.png"
    },
    {
      imgId: 8,
      catId: 4,
      src: "../../../../assets/hands/icons8-thumbs-down-emoji-50.png"
    },
    {
      imgId: 9,
      catId: 5,
      src: "../../../../assets/hands/icons8-thumbs-down-emoji-50.png"
    },
    {
      imgId: 10,
      catId: 6,
      src: "../../../../assets/hands/icons8-thumbs-down-emoji-50.png"
    },
    {
      imgId: 11,
      catId: 7,
      src: "../../../../assets/hands/icons8-thumbs-down-emoji-50.png"
    },
    {
      imgId: 12,
      catId: 8,
      src:
        "../../../../assets/hands/icons8-backhand-index-pointing-up-emoji-50.png"
    },
    {
      imgId: 13,
      catId: 9,
      src:
        "../../../../assets/hands/icons8-backhand-index-pointing-right-emoji-50.png"
    }
  ];

  constructor() {}

  getImgs(catId) {
    return this.img.filter(i => i.catId == catId);
  }

  private catid = new BehaviorSubject<number>(1);
  catID = this.catid.asObservable();

  SetCatID(catid: number): void {
    this.catid.next(catid);
  }
}
