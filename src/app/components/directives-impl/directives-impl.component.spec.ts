import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesImplComponent } from './directives-impl.component';

describe('DirectivesImplComponent', () => {
  let component: DirectivesImplComponent;
  let fixture: ComponentFixture<DirectivesImplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectivesImplComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectivesImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
