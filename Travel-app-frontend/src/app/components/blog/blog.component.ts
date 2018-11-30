// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-blog',
//   templateUrl: './blog.component.html',
//   styleUrls: ['./blog.component.scss']
// })
// export class BlogComponent implements OnInit {

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
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
  blogAndFeedback: FormGroup;
  model: blogAndFeedback; 
  submittedModel: blogAndFeedback; 
  experiences: string[];
  submitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
      this.model = new blogAndFeedback('Enter Name', 'Enter Reviews', 'Enter Email Address: abc@xyz.com', 'Please select');
      
      this.experiences = ['Hightly Recommend', 'Recommend', 
                     'Satisfied', 'Highly Unsatisfied'];                     
                     
      this.blogAndFeedback = this.formBuilder.group({
        name:     [this.model.name, Validators.required],
        blogReviews: [this.model.blogReviews, Validators.required],
        email:    [this.model.email],
        experience:    [this.model.experience, Validators.required]
      });
  }

  onSubmit({ value, valid }: { value: blogAndFeedback, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
  }
  
}
