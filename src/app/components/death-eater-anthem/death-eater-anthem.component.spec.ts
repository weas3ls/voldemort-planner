import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathEaterAnthemComponent } from './death-eater-anthem.component';

describe('DeathEaterAnthemComponent', () => {
  let component: DeathEaterAnthemComponent;
  let fixture: ComponentFixture<DeathEaterAnthemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathEaterAnthemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathEaterAnthemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
