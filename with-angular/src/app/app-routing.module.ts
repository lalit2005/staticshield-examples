import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProtectedpageComponent } from './protectedpage/protectedpage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: "full" }, { path: 'protected', component: ProtectedpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
