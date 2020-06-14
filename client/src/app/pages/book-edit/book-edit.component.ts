// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { BookService } from '../../services/book.service';
import { AuthorService } from '../../services/author.service';
// Import Models
import { Book } from '../../domain/bookstore_db/book';
import { Author } from '../../domain/bookstore_db/author';

// START - USED SERVICES
/**
* BookService.create
*	@description CRUD ACTION create
*
* BookService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* BookService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* AuthorService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Book
 */
@Component({
    selector: 'app-book-edit',
    templateUrl: 'book-edit.component.html',
    styleUrls: ['book-edit.component.css']
})
export class BookEditComponent implements OnInit {
    item: Book;
    listAuthors: Author[];
    model: Book;
    formValid: Boolean;

    constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Book();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.bookService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.authorService.list().subscribe(list => this.listAuthors = list);
        });
    }

    /**
     * Check if an Author is in  authors
     *
     * @param {string} id Id of Author to search
     * @returns {boolean} True if it is found
     */
    containAuthor(id: string): boolean {
        if (!this.item.authors) return false;
        return this.item.authors.indexOf(id) !== -1;
    }

    /**
     * Add Author from Book
     *
     * @param {string} id Id of Author to add in this.item.authors array
     */
    addAuthor(id: string) {
        if (!this.item.authors)
            this.item.authors = [];
        this.item.authors.push(id);
    }

    /**
     * Remove an Author from a Book
     *
     * @param {number} index Index of Author in this.item.authors array
     */
    removeAuthor(index: number) {
        this.item.authors.splice(index, 1);
    }

    /**
     * Save Book
     *
     * @param {boolean} formValid Form validity check
     * @param Book item Book to save
     */
    save(formValid: boolean, item: Book): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.bookService.update(item).subscribe(data => this.goBack());
            } else {
                this.bookService.create(item).subscribe(data => this.goBack());
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



