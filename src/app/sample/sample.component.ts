import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
// import { Observable, Subject, of } from 'rxjs';
// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
// import { map, startWith } from 'rxjs/operators';
// import { sampleService } from './sample.service';
// import { ThemePalette, provideNativeDateAdapter } from '@angular/material/core';


// export interface Task {
//   name: string;
//   completed: boolean;
//   color: ThemePalette;
//   subtasks?: Task[];
// }

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss',
})
export class SampleComponent {


  // sampleObserve: Observable<string> = of("Anusha"); //observable
  // sampleSubject: Subject<string> = new Subject();
  // name: string = 'Akhila';
  // CustomForm!: FormGroup;
  // panelOpenState = false;

  // //autoComplete code
  // myControl = new FormControl('');
  // options: string[] = ['One', 'Two', 'Three'];
  // filteredOptions!: Observable<string[]>;


  // @Input() parentData: any;
  
  @Input() data:any;
  constructor(
    //  public http: HttpClient,
    // public sampleServe: sampleService,
    // public formBuilder: FormBuilder
  ) { }



  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnchanges Method');
  // }


  // }

  //   this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''),
  //     map(value => this._filter(value || '')),
  //   );

  //   this.sampleObserve.subscribe((res) => {
  //     console.log(res);
  //   }, (error) => {
  //     console.log(error);
  //   })

  //   this.sampleSubject.subscribe((res) => {
  //     console.log(res, "successfull subject");
  //   })
  //   this.sampleSubject.next('Akhila');

  //   this.http.get('https://api.agify.io?name=meelad').subscribe((res) => {
  //     console.log(res, "Successful");
  //   }, (error) => {
  //     console.log(error, "Error Msg");
  //   })

  //   console.log(this.sampleServe.shareData);
  //   console.log(this.sampleServe.showvalue());
  //   this.CustomForm = this.formBuilder.group({
  //     Name: 'Akhila',
  //     Place: '',
  //     Hobbies: '',
  //     Feedback: '',
  //   });
  // }
  // saveDetails(): void {
  //   console.log(this.CustomForm.value);
  // }

  // setDetails() {
  //   this.CustomForm.get('Name')?.setValue('Akhila');
  //   this.CustomForm.get('Place')?.setValue('vij');
  //   this.CustomForm.get('Hobbies')?.setValue('playing');
  //   this.CustomForm.get('Feedback')?.setValue('Nothing');
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }

  // task: Task = {
  //   name: 'Indeterminate',
  //   completed: false,
  //   color: 'primary',
  //   subtasks: [
  //     {name: 'Primary', completed: false, color: 'primary'},
  //     {name: 'Accent', completed: false, color: 'accent'},
  //     {name: 'Warn', completed: false, color: 'warn'},
  //   ],
  // };

  // allComplete: boolean = false;

  // updateAllComplete() {
  //   this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  // }

  // someComplete(): boolean {
  //   if (this.task.subtasks == null) {
  //     return false;
  //   }
  //   return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  // }

  // setAll(completed: boolean) {
  //   this.allComplete = completed;
  //   if (this.task.subtasks == null) {
  //     return;
  //   }
  //   this.task.subtasks.forEach(t => (t.completed = completed));
  // }

}

