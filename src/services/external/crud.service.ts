import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class CrudService {
	private url = 'https://propertymecomics.s3.amazonaws.com/comics';

	constructor(
		private httpCli: HttpClient
	) { }

	StoreAllComics() {
		const req = new HttpRequest('GET', this.url, { reportProgress: true });
		return this.httpCli.request(req);
	}

}
