import { BankService } from './../../bank.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bank } from '../../bank';

@Component({
  selector: 'app-edit-bq',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,SidebarComponent, NavbarComponent],
  templateUrl: './edit-bq.component.html',
  styleUrl: './edit-bq.component.css'
})
export class EditBqComponent implements OnInit{

  form!: FormGroup;
  constructor(private route: ActivatedRoute,private router: Router,private formBuilder: FormBuilder, private BankService: BankService) { }



  ngOnInit(): void {

    this.form = this.formBuilder.group({
      code_Bank: [''],
      full_name: [''],
      name: [''],
})
const codeBankParam = this.route.snapshot.paramMap.get('bank');
console.log(codeBankParam)
if (codeBankParam) {
  const codebq = +codeBankParam;


  this.BankService.getBankById(codeBankParam).subscribe(bank => {
    this.form.patchValue({
      code_Bank: bank.code_Bank,
      full_name: bank.full_name,
      name: bank.name

    })


  })
  }
  }

  onSubmit(){
    if (this.form.valid) {
      const codebq = this.route.snapshot.paramMap.get('bank');
      if (codebq) {
        const codebank = +codebq;
        console.log(this.form.value)
        this.BankService.updateBank(codebank, this.form.value).subscribe(() => {

        })
        this.router.navigate(['/banklist']);
        alert("bankk updated !")
      }

    }
  }
}
