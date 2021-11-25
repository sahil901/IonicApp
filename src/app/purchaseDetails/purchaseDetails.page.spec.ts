import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { purchaseDetailsPage } from './purchaseDetails.page';

describe('purchaseDetailsPage', () => {
  let component: purchaseDetailsPage;
  let fixture: ComponentFixture<purchaseDetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [purchaseDetailsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(purchaseDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('make', () => {
    expect(component).toBeTruthy();
  });
});
