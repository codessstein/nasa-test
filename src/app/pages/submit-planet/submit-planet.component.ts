import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-planet',
  templateUrl: './submit-planet.component.html',
  styleUrls: ['./submit-planet.component.scss']
})
export class SubmitPlanetComponent implements OnInit {
  form: FormGroup = this.fb.group({});
  numberPattern: string = '^[0-9]*$';
  isSubmited: boolean = false;

  errorTexts = {
    required: 'Required',
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      planetName: ['', Validators.required],
      galaxy: ['', Validators.required],
      diameter: ['', Validators.required],
      distance: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(form: FormGroup) {
    if(form.status === 'VALID') {
      alert(form.value)
    }
    console.log(form)
    this.isSubmited = true;
    return false;
  }

}
