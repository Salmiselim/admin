import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAgcComponent } from './list-agc.component';

describe('ListAgcComponent', () => {
  let component: ListAgcComponent;
  let fixture: ComponentFixture<ListAgcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAgcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAgcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
