import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToBeADeathEaterComponent } from './how-to-be-a-death-eater.component';

describe('HowToBeADeathEaterComponent', () => {
    let component: HowToBeADeathEaterComponent;
    let fixture: ComponentFixture<HowToBeADeathEaterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HowToBeADeathEaterComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HowToBeADeathEaterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
