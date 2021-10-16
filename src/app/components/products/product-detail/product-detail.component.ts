import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId = 2;
  currId: number = 0;
  product: Product[] = [];
  currProduct: any = {}
  sub: Subscription | undefined;
  constructor(private productService: ProductService, private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('In ngOninit..')
    this.sub = this.productService.getProducts().subscribe(data => {this.product = data});
    console.log(this.product)
    this.currId = Number(this.route.snapshot.paramMap.get('id'));
    // if(this.product.length > 1){
    //   // this.currProduct = this.product.filter(item => item.productId !== this.productId);
    //   for(let i=0; i< this.product.length; i++){
    //     if(this.product[i].productId === this.productId){
    //       this.currProduct = this.product[i];
    //       console.log(this.currProduct)
    //     }
    //   }
  }

  ngOnChanges(): void{
    console.log(this.currProduct)
  }
  displayProduct(){
    console.log(this.currProduct)
    console.log(this.product)
  }
  
}
