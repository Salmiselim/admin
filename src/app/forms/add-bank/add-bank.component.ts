import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BankService } from '../../bank.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-bank',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,SidebarComponent, NavbarComponent],
  templateUrl: './add-bank.component.html',
  styleUrl: './add-bank.component.css'
})
export class AddBankComponent implements OnInit {

  form!: FormGroup;
  codeBank: string = "";
  name : string = "";
  abb: string = "";

  constructor(private bankService: BankService,private router: Router, private formBuilder: FormBuilder) {}


  ngOnInit(): void {
  this.form = this.formBuilder.group({
    code_Bank: [''],
    full_name: [''],
      name: ['']
    });
  }



  onSubmit(){
    const formdata = this.form.value
    console.log(formdata)
    this.bankService.addBank(formdata).subscribe(
      response => {
        console.log('bank added successfully:', response);
        this.router.navigate(['/banklist']);
      },
      error => {
        console.error('Error adding bank:', error);
      }
    );
  }
}
