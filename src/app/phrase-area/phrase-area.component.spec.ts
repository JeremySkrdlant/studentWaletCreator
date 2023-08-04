import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseAreaComponent } from './phrase-area.component';

describe('PhraseAreaComponent', () => {
  let component: PhraseAreaComponent;
  let fixture: ComponentFixture<PhraseAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhraseAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhraseAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
