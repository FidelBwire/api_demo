import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlOverviewComponent } from './html-overview.component';

describe('HtmlOverviewComponent', () => {
  let component: HtmlOverviewComponent;
  let fixture: ComponentFixture<HtmlOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HtmlOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
