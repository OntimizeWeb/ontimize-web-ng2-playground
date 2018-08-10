import { NgModule } from '@angular/core';

import { OntimizeWebModule } from 'ontimize-web-ngx';

import { SharedModule } from '../../shared/shared.module';
import { InputsComponent } from './inputs.component';
import { InputsRoutingModule } from './inputs-routing.module';
import { InputTextComponent } from './01.text/input-text.component';
import { InputDateComponent } from './02.date/input-date.component';
import { InputIntegerComponent } from './03.integer/input-integer.component';
import { InputRealComponent } from './04.real/input-real.component';
import { InputPercentComponent } from './05.percent/input-percent.component';
import { InputCurrencyComponent } from './06.currency/input-currency.component';
import { InputNIFComponent } from './07.nif/input-nif.component';
import { InputEmailComponent } from './08.email/input-email.component';
import { InputPasswordComponent } from './09.password/input-password.component';
import { InputTextareaComponent } from './10.textarea/input-textarea.component';
import { HTMLInputComponent } from './15.html/input-html.component';
import { InputFileComponent } from './11.file/input-file.component';
import { InputCheckboxComponent } from './12.checkbox/input-checkbox.component';
import { InputComboComponent } from './13.combo/input-combo.component';
import { InputListpickerComponent } from './14.listpicker/input-listpicker.component';
import { InputHourComponent } from './16.hour/input-hour.component';
import { InputTimeComponent } from './17.time/input-time.component';
import { ValidatorsComponent } from './99.validators/validators.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    InputsRoutingModule
  ],
  declarations: [
    InputsComponent,
    InputTextComponent,
    InputDateComponent,
    InputIntegerComponent,
    InputRealComponent,
    InputPercentComponent,
    InputCurrencyComponent,
    InputNIFComponent,
    InputEmailComponent,
    InputPasswordComponent,
    InputTextareaComponent,
    HTMLInputComponent,
    InputFileComponent,
    InputCheckboxComponent,
    InputComboComponent,
    InputListpickerComponent,
    InputHourComponent,
    InputTimeComponent,
    ValidatorsComponent
  ]
})
export class InputsModule { }
