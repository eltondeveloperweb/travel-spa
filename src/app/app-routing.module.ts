import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormAddComponent } from './form-add/form-add.component';
import { SelectComboComponent } from './select-combo/select-combo.component';


const routes: Routes = [
  { path:'', redirectTo:'list-of-travels', pathMatch:'full'},
  { path:'list-of-travels', component:HomeComponent },
  { path:'add-a-new-travel', component:FormAddComponent },
  { path: 'combo-travels', component: SelectComboComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
