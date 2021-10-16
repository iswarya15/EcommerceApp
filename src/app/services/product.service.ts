import { Injectable } from "@angular/core";
import { Product } from "../components/products/product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ProductService{

    private productUrl = '../assets/api/products/products.json';

    constructor(private http: HttpClient){}

    getProducts(): Observable<any>{
        return this.http.get<any>(this.productUrl).pipe(
            tap(data => console.log('Tapped items, ',)),
            catchError(this.handleError)
        );
    }
    handleError(err: HttpErrorResponse){
        let errorMessage = "";
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occurred ${err.error.message}`}
        else{
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`}
        console.log(errorMessage)
        return errorMessage;
    }   
}