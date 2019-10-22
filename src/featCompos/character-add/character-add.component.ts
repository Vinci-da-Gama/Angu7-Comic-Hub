import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from './../../services/external/crud.service';

@Component({
	selector: 'app-character-add',
	templateUrl: './character-add.component.html',
	styleUrls: ['./character-add.component.scss']
})
export class CharacterAddComponent implements OnInit {

	addCharacterForm: FormGroup;
	acName: FormControl;
	acDesc: FormControl;
	acImg: FormControl;

	constructor(
		private _fb: FormBuilder,
		private crudService: CrudService
	) { }

	ngOnInit() {
		this.createAddCharacterFormControl();
		this.createAddCharacterFormGroup();
	}

	private createAddCharacterFormControl() {
		const initName = null;
		const initDesc = null;
		const initImg = null;

		this.acName = new FormControl(initName, [Validators.required]);
		this.acDesc = new FormControl(initDesc, [Validators.required]);
		this.acImg = new FormControl(initImg, [Validators.required]);
	}

	private createAddCharacterFormGroup() {
		this.addCharacterForm = new FormGroup({
			'acName': this.acName,
			'acDesc': this.acDesc,
			'acImg': this.acImg
		});
	}

	createNewHero(f: FormGroup) {
		const fVal = f.value;
		const character = {
			name: fVal.acName,
			description: fVal.acDesc,
			image: fVal.acImg
		}
		this.crudService.AddNewCharacter(character)
	}

}
