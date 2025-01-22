import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesImplementationComponent } from './pipes-implementation.component';

describe('PipesImplementationComponent', () => {
  let component: PipesImplementationComponent;
  let fixture: ComponentFixture<PipesImplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipesImplementationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipesImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
