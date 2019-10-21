import { Character } from '../interfaces/charactor';

export class Comic {
	public id: string;
	public slug: string;
	public name: string;
	public description: string;
	public issueNumber: string;
	public pages: string;
	public price: string;
	public releaseDate: string;
	public image: string;
	public characters: Character[];

	constructor(id: string, slug: string, name: string,
		desc: string, issueNumber: string, pages: string,
		price: string, releaseDate: string, image: string,
		characters: Character[]) {
		this.id = id;
		this.slug = slug;
		this.name = name;
		this.description = desc;
		this.issueNumber = issueNumber;
		this.pages = pages;
		this.price = price;
		this.releaseDate = releaseDate;
		this.image = image;
		this.characters = characters;
	}
}
