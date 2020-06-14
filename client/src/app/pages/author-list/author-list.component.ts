import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { AuthorService } from '../../services/author.service';
// Import Models
import { Author } from '../../domain/bookstore_db/author';

// START - USED SERVICES
/**
* AuthorService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* AuthorService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Author
 * @class AuthorListComponent
 */
@Component({
    selector: 'app-author-list',
    templateUrl: './author-list.component.html',
    styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
    list: Author[];
    search: any = {};
    idSelected: string;
    constructor(
        private authorService: AuthorService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.authorService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Author to remove
     *
     * @param {string} id Id of the Author to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Author
     */
    deleteItem() {
        this.authorService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
