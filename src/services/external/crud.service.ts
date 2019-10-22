import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { CharacterMinInterface } from 'src/contracts/interfaces/charactor_required';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CrudService {
	private url = 'https://propertymecomics.s3.amazonaws.com/comics';
	private apiBase = 'https://propertymecomics.s3.amazonaws.com/api';

	constructor(
		private httpCli: HttpClient
	) { }

	StoreAllComics() {
		const req = new HttpRequest('GET', this.url, { reportProgress: true });
		return this.httpCli.request(req);
	}

	AddNewCharacter(newRole: CharacterMinInterface): Observable<CharacterMinInterface | Object> {
		console.log('24 -- newRole: ', newRole, `${this.apiBase}/character`)
		return this.httpCli.post(`${this.apiBase}/character`, newRole);
	}

}
