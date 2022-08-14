import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'gallery',
        component:GalleryComponent
      },
      {
        path:'product',
        component:ProductComponent
      },
    ]
  },
  
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/admin/dashboard'
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ImageUploaderComponent,
    GalleryComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    ImageCropperModule,
    FormsModule 
  ]
})
export class AdminModule { }
