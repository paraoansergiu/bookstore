/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE bookBaseService PLEASE EDIT ../book.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Book } from '../../domain/bookstore_db/book';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Book.service.ts
 */

/*
 * SCHEMA DB Book
 *
	{
		ISBN: {
			type: 'String',
			required : true
		},
		author: {
			type: 'String'
		},
		category: {
			type: 'String'
		},
		genre: {
			type: 'String'
		},
		language: {
			type: 'String'
		},
		sumary: {
			type: 'String'
		},
		title: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		authors: [{
			type: Schema.ObjectId,
			ref : "Book"
		}],
	}
 *
 */
@Injectable()
export class BookBaseService {

    contextUrl: string = environment.endpoint + '/book';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * BookService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Book): Observable<Book> {
        return this.http
            .post<Book>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * BookService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * BookService.findByauthors
    *   @description CRUD ACTION findByauthors
    *   @param Objectid key Id of model to search for
    *
    */
    findByAuthors(id: string): Observable<Book[]> {
        return this.http
            .get<Book[]>(this.contextUrl + '/findByauthors/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * BookService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Book> {
        return this.http
            .get<Book>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * BookService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Book[]> {
        return this.http
            .get<Book[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * BookService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Book): Observable<Book> {
        return this.http
            .post<Book>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
