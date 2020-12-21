import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product.model';

import { ProductService } from '../product.service';

@Injectable({ 
  providedIn: 'root'
})
export class GetProductsResolver implements Resolve<Observable<Product[]>> {

    constructor(private productService: ProductService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.productService.getProductList();
    }

}