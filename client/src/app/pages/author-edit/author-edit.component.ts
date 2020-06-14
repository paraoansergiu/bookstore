// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { AuthorService } from '../../services/author.service';
import { BookService } from '../../services/book.service';
// Import Models
import { Author } from '../../domain/bookstore_db/author';
import { Book } from '../../domain/bookstore_db/book';

// START - USED SERVICES
/**
* AuthorService.create
*	@description CRUD ACTION create
*
* AuthorService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* AuthorService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* BookService.findByauthors
*	@description CRUD ACTION findByauthors
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Author
 */
@Component({
    selector: 'app-author-edit',
    templateUrl: 'author-edit.component.html',
    styleUrls: ['author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
    item: Author;
    externalBook_authors: Book[];
    model: Author;
    formValid: Boolean;

    constructor(
    private authorService: AuthorService,
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Author();
        this.externalBook_authors = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.authorService.get(id).subscribe(item => this.item = item);
                this.bookService.findByAuthors(id).subscribe(list => this.externalBook_authors = list);
            }
            // Get relations
        });
    }


    /**
     * Save Author
     *
     * @param {boolean} formValid Form validity check
     * @param Author item Author to save
     */
    save(formValid: boolean, item: Author): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.authorService.update(item).subscribe(data => this.goBack());
            } else {
                this.authorService.create(item).subscribe(data => this.goBack());
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



