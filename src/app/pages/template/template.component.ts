import { Component, OnInit } from '@angular/core';

import { LyTheme2 } from '@alyle/ui';
import { HomeComponent } from '../body-components/home/home.component';
import { LoginComponent } from '../login/login.component';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ComponenteService } from 'src/app/directives/component.service';

const styles = ({
	grow: {
		flexGrow: 1
	}
});

@Component({
	selector: 'app-template',
	templateUrl: './template.component.html',
	styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

	public classes = this._theme.addStyleSheet(styles);

	constructor(private _theme: LyTheme2,
		private route: ActivatedRoute,
		private router: Router,
		public componenteService: ComponenteService) { }

	public ngOnInit() {

		// Paga info da URL
		let comp = this.route.snapshot.paramMap.get('infos');

		let compSplit: string[] = [];
		let compName: string;
		
		// Se possui ponto "." faz split
		if (comp && comp.includes(".")) {
			// Splita
			compSplit = comp.split(".");
			compName = compSplit[0];
			compSplit.shift();
			this.componenteService.otherInfos = compSplit;
		} else {
			compName = comp;
		}

		switch (compName) {
			case "home":
				this.componenteService.component = HomeComponent;
				break;
			default:
				this.componenteService.component = LoginComponent;
				break;
		}
	}


}
