import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MAT_DATE_FORMATS } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MomentDateModule } from "@angular/material-moment-adapter";
import { TranslateModule } from "@ngx-translate/core";
import { STARK_DATE_FORMATS, StarkDatePickerComponent } from "./components";
import { StarkInputMaskDirectivesModule } from "../input-mask-directives";

@NgModule({
	declarations: [StarkDatePickerComponent],
	imports: [
		CommonModule,
		MatDatepickerModule,
		StarkInputMaskDirectivesModule,
		MatInputModule,
		MomentDateModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule
	],
	exports: [StarkDatePickerComponent],
	/**
	 * Since we import `MomentDateModule`, there is no default value for `MAT_DATE_FORMATS`.
	 * This provider is really useful to set a default `MAT_DATE_FORMATS` configuration for the date-picker component.
	 * To be able to use the `StarkDatePicker` component, the developer simply needs to import `StarkDatePickerModule`, nothing else.
	 */
	providers: [{ provide: MAT_DATE_FORMATS, useValue: STARK_DATE_FORMATS }]
})
export class StarkDatePickerModule {}
