import { AgenceService } from './../../agence.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankService } from '../../bank.service';
import { Bank } from '../../bank';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-agc',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,SidebarComponent, NavbarComponent],
  templateUrl: './add-agc.component.html',
  styleUrls: ['./add-agc.component.css']

})
export class AddAgcComponent implements OnInit {
  name: string = '';
  address: string = '';
  banks: Bank[] = [];
  form!: FormGroup;

  constructor(private bankService: BankService,private router: Router, private formBuilder: FormBuilder, private agenceService: AgenceService) {}

  ngOnInit(): void {
    this.bankService.getBanks().subscribe(banks => {
      this.banks = banks;
    });

    this.form = this.formBuilder.group({
      name: [''],
      address: [''],
      bank: ['']
    });
  }

  onSubmit() {
    const formData = this.form.value;
    this.agenceService.addAgence(formData).subscribe(
      response => {
        console.log('Agency added successfully:', response);
        this.router.navigate(['/agclist']);
      },
      error => {
        console.error('Error adding agency:', error);
      }
    );
  }
}
