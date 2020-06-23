import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TravelsComponent } from './travels/travels.component';
import { TravelComponent } from './travel/travel.component';
import { FormAddComponent } from './form-add/form-add.component';
import { InputComponent } from './input/input.component';
import { SelectComboComponent } from './select-combo/select-combo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TravelsComponent,
    TravelComponent,
    FormAddComponent,
    InputComponent,
    SelectComboComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
