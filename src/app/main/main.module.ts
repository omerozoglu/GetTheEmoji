import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "../main/main.component";
import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";
import { SideNavigationComponent } from "./components/side-navigation/side-navigation.component";
import { BodyComponent } from "./components/body/body.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [
    MainComponent,
    NavigationBarComponent,
    SideNavigationComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [CommonModule],
  exports: [MainComponent]
})
export class MainModule {}
