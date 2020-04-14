import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path: '',component:AboutmeComponent},
  {path: 'more',component:ContactmeComponent},
  {path: 'projects',component:ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
