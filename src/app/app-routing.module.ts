import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { InfoComponent } from './pages/info/info.component';

const routes: Routes = [

  {path: "Home", component:MainComponent},
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: "info", component:InfoComponent},  

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
