import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { CartService } from '../../services/cart.service';
// Import Models
import { Cart } from '../../domain/bookstore_db/cart';

// START - USED SERVICES
/**
* CartService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* CartService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Cart
 * @class CartListComponent
 */
@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
    list: Cart[];
    search: any = {};
    idSelected: string;
    constructor(
        private cartService: CartService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.cartService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Cart to remove
     *
     * @param {string} id Id of the Cart to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Cart
     */
    deleteItem() {
        this.cartService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
