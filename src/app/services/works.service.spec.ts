import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WorksService } from './works.service';

describe('WorksService', () => {
  let service: WorksService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WorksService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    // service = TestBed.inject(WorksService);
  });

  it('should make a get request',async () => {
    const test = {
      status: "ok",
      'message-type': "work-list",
      'message-version': "1.0.0",
      message: {}
    }

    const res = await service.sendGetRequest(1);
    console.log(JSON.parse(res), 'res');

    expect(service).toBeTruthy();
  });
});
