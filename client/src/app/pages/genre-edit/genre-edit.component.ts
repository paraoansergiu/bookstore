// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { GenreService } from '../../services/genre.service';
// Import Models
import { Genre } from '../../domain/bookstore_db/genre';

// START - USED SERVICES
/**
* GenreService.create
*	@description CRUD ACTION create
*
* GenreService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* GenreService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Genre
 */
@Component({
    selector: 'app-genre-edit',
    templateUrl: 'genre-edit.component.html',
    styleUrls: ['genre-edit.component.css']
})
export class GenreEditComponent implements OnInit {
    item: Genre;
    model: Genre;
    formValid: Boolean;

    constructor(
    private genreService: GenreService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Genre();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.genreService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Genre
     *
     * @param {boolean} formValid Form validity check
     * @param Genre item Genre to save
     */
    save(formValid: boolean, item: Genre): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.genreService.update(item).subscribe(data => this.goBack());
            } else {
                this.genreService.create(item).subscribe(data => this.goBack());
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



