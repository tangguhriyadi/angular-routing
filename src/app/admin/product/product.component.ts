import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

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
    public dialog:MatDialog
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
    this.books=[
      {
        title:'Tauhid Islam',
      author:'Tangguh',
      publisher:'qudwah',
      year:2022,
      isbn:'081320250390',
      price:150000
      },
      {
        title:'Tauhid Islam kaffah',
      author:'Tangguh Riyadi',
      publisher:'qudwah',
      year:2022,
      isbn:'081320250390',
      price:170000
      },
    ]
  }
  productDetail(data:any, id:number){
    let dialog=this.dialog.open(ProductDetailComponent, {
      width:'400px',
      data:data
    })
    dialog.afterClosed().subscribe(res => {
      if(res){
        if(id === -1) this.books.push(res);
        else this.books[id]=res
      }
    })
  }
  deleteProduct(id:number){
    var conf = confirm('delete item?')
    if(conf)
    this.books.splice(id,1)
  }
}
