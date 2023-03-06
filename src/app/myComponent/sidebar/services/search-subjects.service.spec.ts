import { TestBed } from '@angular/core/testing';

import { SearchSubjectsService } from './search-subjects.service';

describe('SearchSubjectsService', () => {
  let service: SearchSubjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchSubjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
