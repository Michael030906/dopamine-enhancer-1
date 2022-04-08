import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesomeFactsComponent } from './wholesome-facts.component';

describe('WholesomeFactsComponent', () => {
  let component: WholesomeFactsComponent;
  let fixture: ComponentFixture<WholesomeFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholesomeFactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesomeFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
