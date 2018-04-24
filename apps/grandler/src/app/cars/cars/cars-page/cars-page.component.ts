import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Car} from '../../cars.models';
import {select, Store} from '@ngrx/store';
import {getCarProblems} from '../../cars.reducer';
import {Observable} from 'rxjs/Observable';
import {CarsGetCheckedPartsAction, CarsGetUnCheckedPartsAction} from '../../cars.actions';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.scss']
})
export class CarsPageComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  problems$: Observable<any>;
  problems: any;
  summ: number;
  problemsKeys: string[];

  constructor(private _formBuilder: FormBuilder, private store: Store<Car>) {
    this.problems$ = store.pipe(select(getCarProblems));
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.problems$.subscribe(problems => {
      this.problems = problems[0];
      this.problemsKeys = Object.keys(problems[0]);
      this.summ = this.problemsKeys.reduce((acc, item) => {
        if (!problems[0][item].checked) {
          return acc + Number(problems[0][item].cost);
        }
        return acc;
      }, 0);
    });
  }

  checkedPart(problem, checkbox) {
    if (checkbox.checked) {
      this.store.dispatch(new CarsGetCheckedPartsAction(problem));
    } else {
      this.store.dispatch(new CarsGetUnCheckedPartsAction(problem));
    }
  }
}
