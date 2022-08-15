
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<ProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public api:ApiService
  ) { }

  ngOnInit(): void {
  }
  loading:any
  saveData(){
    // jika ga ada data.id berarti mau nambah data
    this.loading= true
    if(this.data.id == undefined){
      this.api.post('books', this.data).subscribe(res => {
        this.dialogRef.close(res)
        this.loading=false
      }, error => {
        this.loading=false
        alert(error)
      })
      // jika ada data.id berarti mau edit data
    } else {
      this.api.put('books/'+this.data.id, this.data).subscribe(res =>{
        this.dialogRef.close(res)
        console.log(res)
        this.loading=false
      }, error=> {
        this.loading = false
        alert(error)
      })
    }
    
    
  }

}
