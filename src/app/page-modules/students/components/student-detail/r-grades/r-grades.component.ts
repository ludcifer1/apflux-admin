import * as _moment from 'moment';

import { Component, OnInit } from '@angular/core';
import {
	DateColumn,
	DateFilter,
	DropdownFilter,
	IDataTable,
	NumberColumn,
	TextColumn,
	TextFilter
} from '@logixtek/data-table';

import { RetailerOrderStoreService } from '@app/root-store/store-services-manager/retailer-order.store.service';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { FORM } from '@app/shared/constants/form.constant';
import { StudentStoreService } from '@app/root-store/store-services-manager/retailer-info.store.service';
import { map, tap } from 'rxjs/operators';

@Component({
	selector: 'r-grades',
	templateUrl: './r-grades.component.html',
	styleUrls: ['./r-grades.component.scss']
})
export class RGradesComponent implements OnInit {
	// ================================================
	// =              ATTRIBUTES SECTION              =
	// ================================================
	gradesForm: FormGroup;
	subject: any;
	score: any;
	formArr: any[];
	// ================================================
	// =             CONSTRUCTOR SECTION              =
	// ================================================

	constructor(
		private stdStoreService: StudentStoreService,
		private fb: FormBuilder
	) { }

	get gradesArr() {
		return <FormArray>this.gradesForm.get('gradesArr');
	}

	ngOnInit() {
		this.gradesForm = this.fb.group({});
		this.gradesForm.addControl('gradesArr', new FormArray([]));
		this.gradesForm.setControl('gradesArr', this.fb.array(this.loadSubject()));
		//this.patchScoretoForm(this.score);

	}
	// ================================================
	// =                   PRIVATE                    =
	// ================================================
	private loadSubject() {
		this.subject = [];
		this.score = [];
		this.stdStoreService.getScore()
		.pipe(
			tap(
				res=>{
					this.subject = res;
					this.score =
						res
							.map(subject => subject.grade_detail)
							.map(
								i => {
									if (i) {
										return i.map(item => this.remapScore(item))
									}
								}
							)
				}
			)
		)
		.subscribe();

		const temp = [];
		for (let index = 0; index < this.subject.length; index++) {
			temp.push(this.createGradeForm());
		}


		for (let i = 0; i < this.subject.length; i++) {
			setTimeout(()=>{
				if(this.score[i]){
				temp[i].patchValue(
					{
						Presentation: this.score[i][0].Presentation,
						Workshop1: this.score[i][1].Workshop1,
						Workshop2: this.score[i][2].Workshop2,
						Workshop3: this.score[i][3].Workshop3 | 0,
						Workshop4: this.score[i][4].Workshop4,
						Workshop5: this.score[i][5].Workshop5 || 0,
					}
					);
				}
			},500)
		}
if(this.score[0]){
	return temp;

}
	}

	private createGradeForm() {
		return this.fb.group(FORM.GRADE_FORM);
	}
	private patchScoretoForm(scoregroup: any[]) {
		this.gradesArr.controls.map(
			control => control.patchValue(scoregroup)
		)
		console.log(this.gradesArr)
	}

	private remapScore(scoreOBJ: any) {
		if (scoreOBJ) {
			switch (scoreOBJ.mark_type) {
				case "Presentation":
					return { Presentation: scoreOBJ.mark, id:scoreOBJ.id };
				case "Workshop 1":
					return { Workshop1: scoreOBJ.mark, id:scoreOBJ.id };
				case "Workshop 2":
					return { Workshop2: scoreOBJ.mark, id:scoreOBJ.id };
				case "Workshop 3":
					return { Workshop3: scoreOBJ.mark , id:scoreOBJ.id };
				case "Workshop 4":
					return { Workshop4: scoreOBJ.mark, id:scoreOBJ.id };
				case "Workshop 5":
					return { Workshop5: scoreOBJ.mark, id:scoreOBJ.id };
			}
		}
	}
}
