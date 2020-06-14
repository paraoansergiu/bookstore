// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CartService } from '../../services/cart.service';
// Import Models
import { Cart } from '../../domain/bookstore_db/cart';

// START - USED SERVICES
/**
* CartService.create
*	@description CRUD ACTION create
*
* CartService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* CartService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Cart
 */
@Component({
    selector: 'app-cart-edit',
    templateUrl: 'cart-edit.component.html',
    styleUrls: ['cart-edit.component.css']
})
export class CartEditComponent implements OnInit {
    item: Cart;
    model: Cart;
    formValid: Boolean;

    constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Cart();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.cartService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Cart
     *
     * @param {boolean} formValid Form validity check
     * @param Cart item Cart to save
     */
    save(formValid: boolean, item: Cart): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.cartService.update(item).subscribe(data => this.goBack());
            } else {
                this.cartService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



