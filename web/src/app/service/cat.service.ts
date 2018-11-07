import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable(
)
export class CatService {
  private baseUrl = 'http://test.hr.gwapit.in:9081/api/cat/';

  constructor(
    private http: HttpClient
  ) {
  }

  public fetchDataFromServer(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

}
