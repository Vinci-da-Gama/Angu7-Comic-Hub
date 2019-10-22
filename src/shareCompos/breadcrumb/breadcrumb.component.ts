import { Component, OnInit } from '@angular/core';

import { BreadcrumbServiceService } from './../../services/internal/breadCrumb/breadcrumb-service.service';

@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
	showNx: boolean = false;
	title: string = '';

	constructor(
		private bcService: BreadcrumbServiceService
	) { }

	ngOnInit() {
		this.showNx = this.bcService.getShow()
	}

	ngAfterContentChecked(): void {
		this.showNx = this.bcService.getShow()
		this.title = this.bcService.getTitle()
	}

}
