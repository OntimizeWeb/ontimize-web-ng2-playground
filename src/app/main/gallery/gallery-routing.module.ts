import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { GalleryMediaComponent } from './gallery-media/gallery-media.component';
import { GalleryExampleComponent } from './gallery-example/gallery-example.component';

export const routes: Routes = [
  {
    path: '', component: GalleryComponent,
    children: [
      { path: '', redirectTo: 'playground', pathMatch: 'prefix' },
      { path: 'playground', component: GalleryMediaComponent },
      { path: 'examples', component: GalleryExampleComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
