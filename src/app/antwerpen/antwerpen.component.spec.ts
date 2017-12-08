import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntwerpenComponent } from './antwerpen.component';

describe('AntwerpenComponent', () => {
  let component: AntwerpenComponent;
  let fixture: ComponentFixture<AntwerpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntwerpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntwerpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
