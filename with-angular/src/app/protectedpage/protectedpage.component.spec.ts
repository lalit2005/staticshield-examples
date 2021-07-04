import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedpageComponent } from './protectedpage.component';

describe('ProtectedpageComponent', () => {
  let component: ProtectedpageComponent;
  let fixture: ComponentFixture<ProtectedpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectedpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectedpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
