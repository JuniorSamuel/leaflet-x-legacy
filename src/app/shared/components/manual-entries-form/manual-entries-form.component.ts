import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'manual-entries-form',
  templateUrl: './manual-entries-form.component.html',
  styleUrls: ['./manual-entries-form.component.sass']
})
export class ManualEntriesFormComponent implements OnInit {
  isCollapsed1 = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  isCollapsed4 = true;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      lines: this.fb.array([]),
      squares: this.fb.array([]),
      points: this.fb.array([]),
      polygons: this.fb.array([]),
    });
  }

  get lines() {
    return this.form.get('lines') as FormArray;
  }

  get squares() {
    return this.form.get('squares') as FormArray;
  }

  get points() {
    return this.form.get('points') as FormArray;
  }

  get polygons() {
    return this.form.get('polygons') as FormArray;
  }

  addInput(array: FormArray) {
    array.push(this.fb.control(''));
  }

  removeInput(array: FormArray, index: number) {
    array.removeAt(index);
  }

  ngOnInit() {
  }

}
