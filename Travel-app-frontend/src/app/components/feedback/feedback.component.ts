// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-feedback',
//   templateUrl: './feedback.component.html',
//   styleUrls: ['./feedback.component.scss']
// })
// export class FeedbackComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { ValidationService } from '../../Validations/validation.service';
import { blogAndFeedback } from '../../Validations/blogAndFeedback.model';

@Component({
 selector: 'reactive-driven-form',
 templateUrl: './feedback.component.html'
})
export class FeedbackComponent implements OnInit {
blogAndFeedback: FormGroup;
 model: blogAndFeedback;
 submittedModel: blogAndFeedback;
 ratings: string[];
 submitted: boolean = false;

 constructor(private formBuilder: FormBuilder) { }

 ngOnInit() {
     this.model = new blogAndFeedback('Enter Name', 'Enter Reviews','');

     this.ratings = ['Excellent', 'Good', 'Satisfactory', "Poor"];

     this.blogAndFeedback = this.formBuilder.group({
       name:     [this.model.name, Validators.required],
       review: [this.model.review, Validators.required],
      email:    [this.model.email],
       rating:    [this.model.rating, Validators.required]
     });
 }

 onSubmit({ value, valid }: { value: blogAndFeedback, valid: boolean }) {
   this.submitted = true;
   this.submittedModel = value;
 }
}
