import { Agence } from './../../agence';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { AgenceService } from '../../agence.service';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-agence',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, CommonModule],
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {
  bankCode: string = '';
  agencies: Agence[] = [];


  constructor(private router: Router, private agenceService: AgenceService ) {}
  add(): void {
    this.router.navigate(['/addagc']);
  }

  ngOnInit() {
    this.agenceService.getAgences().subscribe(data => {
      this.agencies = data;
    });
  }
  deleteAgency(code: Number): void {
    this.agenceService.deleteAgence(code).subscribe(() => {
      this.agencies = this.agencies.filter(agency => agency.codeAgence !== code);
    });
  }

  edit(codeagence: number) {
    this.router.navigate(['/editagc', codeagence]);
  }
}
