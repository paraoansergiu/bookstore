import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { GenreService } from '../../services/genre.service';
// Import Models
import { Genre } from '../../domain/bookstore_db/genre';

// START - USED SERVICES
/**
* GenreService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* GenreService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Genre
 * @class GenreListComponent
 */
@Component({
    selector: 'app-genre-list',
    templateUrl: './genre-list.component.html',
    styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {
    list: Genre[];
    search: any = {};
    idSelected: string;
    constructor(
        private genreService: GenreService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.genreService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Genre to remove
     *
     * @param {string} id Id of the Genre to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Genre
     */
    deleteItem() {
        this.genreService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
