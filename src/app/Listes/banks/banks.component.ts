import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { Bank } from '../../bank';
import { BankService } from '../../bank.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-banks',
  standalone: true,
  imports: [NavbarComponent,SidebarComponent,CommonModule],
  templateUrl: './banks.component.html',
  styleUrl: './banks.component.css'
})
export class BanksComponent implements OnInit {
  banks: Bank[] = [];

  constructor( private bankService: BankService ) {}

  ngOnInit(): void {
    this.bankService.getBanks().subscribe(data => {
      this.banks = data;
    });
  }

}
