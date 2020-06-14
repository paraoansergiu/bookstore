import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { BookService } from '../../services/book.service';
// Import Models
import { Book } from '../../domain/bookstore_db/book';

// START - USED SERVICES
/**
* BookService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* BookService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Book
 * @class BookListComponent
 */
@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
    list: Book[];
    search: any = {};
    idSelected: string;
    constructor(
        private bookService: BookService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.bookService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Book to remove
     *
     * @param {string} id Id of the Book to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Book
     */
    deleteItem() {
        this.bookService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
