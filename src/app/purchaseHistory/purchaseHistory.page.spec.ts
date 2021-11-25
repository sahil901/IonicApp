import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { purchaseHistoryPage } from './purchaseHistory.page';

describe('purchaseHistoryPage', () => {
  let component: purchaseHistoryPage;
  let fixture: ComponentFixture<purchaseHistoryPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [purchaseHistoryPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(purchaseHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('make', () => {
    expect(component).toBeTruthy();
  });
});
