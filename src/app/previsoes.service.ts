import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Previsao } from './model/previsao';
@Injectable({
  providedIn: 'root'
})
export class PrevisoesService {

  public obterPrevisoes(cidade: String): Observable<Previsao[]> {
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=6d1b0dd38cb4016a1b51d572f677c6f9`;
    return this.httpClient.get<Previsao[]>(url);
  }
  constructor(private httpClient: HttpClient) {

  }
}