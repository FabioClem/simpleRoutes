import { Component, OnInit } from '@angular/core';
import { ComponenteService } from 'src/app/directives/component.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public infos: any;

	constructor(public componenteService: ComponenteService) {

	}

	public ngOnInit() {
		if (this.componenteService.otherInfos) {
			this.infos = this.componenteService.otherInfos
		}
	}

}
