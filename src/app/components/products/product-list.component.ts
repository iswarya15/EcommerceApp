import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from './product';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{


    pageTitle: string = "Product List";
    imgWidth: number = 20;
    imgHeight: number = 17;
    showImage: boolean = false;
    listFilter: string = '';
    products: Product[] = [];
    filteredProducts: Product[] = this.products;
    sub: Subscription | undefined;

    constructor(private productService: ProductService){
    }

    ngOnInit(): void{
      console.log('In On init..');  
      this.sub = this.productService.getProducts().subscribe(data => {this.products = data; this.filteredProducts = this.products});
      console.log('From product list component...',this.products )
    }

    ngOnDestroy(): void{
      this.sub?.unsubscribe();
    }

    toggleImage(){
      this.showImage = !this.showImage;
    }

    getFilterText(){
      console.log('In getFilterText: ',this.listFilter);
      this.filteredProducts = this.performFilterProducts();
    }

    performFilterProducts(): Product[]{
      this.listFilter = this.listFilter.toLocaleLowerCase();
      return this.products.filter((product: Product) => product.productName.toLocaleLowerCase().includes(this.listFilter));
    }
    onRatingClicked(message: string): void{
      this.pageTitle = message;
    }
}