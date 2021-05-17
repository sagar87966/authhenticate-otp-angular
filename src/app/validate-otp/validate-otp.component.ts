import { Component, OnInit, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedService } from '../utils/shared.service';


@Component({
  selector: 'app-validate-otp',
  templateUrl: './validate-otp.component.html',
  styleUrls: ['./validate-otp.component.scss'],
})
export class ValidateOtpComponent implements OnInit {
  formInput: string[] = [
    'input1',
    'input2',
    'input3',
    'input4',
    'input5',
    'input6',
  ];
  form: FormGroup;

  @ViewChildren('formRow') rows:
    | { _results: { nativeElement: { focus: () => void } }[] }
    | undefined;

  constructor(private _snackBar: MatSnackBar, private router:Router,public sharedService:SharedService) {
    this.form = this.toFormGroup(this.formInput);
  }

  ngOnInit(): void {}

  toFormGroup(elements: any): FormGroup {
    const group: any = {};
    elements.forEach((key: any) => {
      group[key] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
  }

  keyUpEvent(event: any, index: number) {
    let pos = index;
    let value = event?.target?.value;
    let id = event?.target?.id;
    let valueExist = this.validateInputTypeNumber(value);

    if (event.keyCode === 8 && event.which === 8) {
      pos = index - 1;
    } else {
      pos = index + 1;
    }
    if (
      pos > -1 &&
      pos < this.formInput.length &&
      ((valueExist && valueExist?.length > 0) || event.keyCode === 8)
    ) {
      this.rows?._results[pos].nativeElement.focus();
    }
    this.validateAlphabet(id, value);
  }

  validateAlphabet(key: string, input: string) {
    let setValue = input.match(/[A-Za-z]/) ? '' : input;
    this.form.patchValue({ [key]: setValue });
  }

  validateInputTypeNumber = (value: string): string[] | null => {
    return value.match(/[0-9]/g);
  };

  sendAgain() {
    this.form.reset();
    this._snackBar.open('OTP Send Successfully!!!', 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  onSubmit() {
    this._snackBar.open('OTP Validated Successfully!!!', 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    this.sharedService.hideLanding = true;
    this.router.navigateByUrl('/dashboard')
  }
}
