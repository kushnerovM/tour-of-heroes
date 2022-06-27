import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInteractionComponent } from './hero-interaction.component';

describe('HeroInteractionComponent', () => {
  let component: HeroInteractionComponent;
  let fixture: ComponentFixture<HeroInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroInteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
