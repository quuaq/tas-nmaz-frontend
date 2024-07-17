import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tasinmaz } from '../models/tasinmaz';
import { TasinmazTableComponent } from '../tasinmaz-table/tasinmaz-table.component';

@Injectable({
  providedIn: 'root'
})
export class TasinmazService {

  constructor(private httpClient: HttpClient) { }
  path = "https://localhost:44379/api/Tasinmaz";

  getTasinmazlar(): Observable<Tasinmaz[]>{
    return this.httpClient.get<Tasinmaz[]>(this.path);
  }

}
