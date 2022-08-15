import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title:any;
  book:any = {}
  books:any = []
  constructor(
    public dialog:MatDialog,
    public api:ApiService
  ) { 
    
  }

  ngOnInit(): void {
    this.title ="Products"
    this.book = {
      title:'Tauhid Islam',
      author:'Tangguh',
      publisher:'qudwah',
      year:2022,
      isbn:'081320250390',
      price:150000
    }
    this.getBooks()
    
  }
  getBooks(){
    this.api.get('books').subscribe(res => {
      this.books = res
    })
  }
  productDetail(data:any, id:number){
    let dialog=this.dialog.open(ProductDetailComponent, {
      width:'400px',
      data:data
    })
    dialog.afterClosed().subscribe(res => {
      if(res){
        if(id === -1) this.books.push(res);
        else this.books[id]=data
      }
    })
  }
  deleteProduct(id:number){
    var conf = confirm('delete item?')
    if(conf)
    this.api.delete('books/'+this.books[id].id).subscribe(res => {
      this.books.splice(id, 1)
    }, error =>{
      alert(error)
    })
  }
  
}
