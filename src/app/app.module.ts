import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/** Import animations */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Import Alyle UI */
import {
	LyThemeModule,
	LY_THEME,
	LY_THEME_GLOBAL_VARIABLES,
	LyCommonModule
} from '@alyle/ui';

/** Import themes */
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';

import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyTypographyModule } from '@alyle/ui/typography';
import { LyButtonModule } from '@alyle/ui/button';
import { LyBadgeModule } from '@alyle/ui/badge';
import { LyIconModule } from '@alyle/ui/icon';
import { HttpClientModule } from '@angular/common/http';
import { TemplateComponent } from './pages/template/template.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/body-components/home/home.component';
import { ComponenteService } from './directives/component.service';

@NgModule({
	declarations: [
		AppComponent,
		TemplateComponent,
		LoginComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		// Animations
		BrowserAnimationsModule,
		LyThemeModule.setTheme('minima-light'),

		// Components Ly
		LyToolbarModule,
		LyTypographyModule,
		LyButtonModule,
		LyBadgeModule,
		LyIconModule
	],
	providers: [
		{ provide: LY_THEME, useClass: MinimaLight, multi: true }, // name: `minima-light`
		{ provide: LY_THEME, useClass: MinimaDark, multi: true }, // name: `minima-dark`
		ComponenteService
	],
	bootstrap: [AppComponent],
	entryComponents: [
		HomeComponent,
		LoginComponent
	]
})
export class AppModule { }
