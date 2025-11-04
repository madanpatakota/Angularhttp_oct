import { TestBed } from '@angular/core/testing';

import { CustomhttpInterceptor } from './customhttp.interceptor';

describe('CustomhttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CustomhttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CustomhttpInterceptor = TestBed.inject(CustomhttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
