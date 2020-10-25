import { Component } from '@angular/core';
import { Previsao } from './model/previsao';
import { PrevisoesService } from './previsoes.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  previsoes: Previsao[];
  cidade: String;
  resposta: String;

  constructor(private previsoesService: PrevisoesService) {
  }

  verificar(input) {
    this.cidade = input.value.toString();
    this.previsoesService.obterPrevisoes(this.cidade).subscribe((previsoes) => {
      this.previsoes = previsoes['list'];
      console.log(this.previsoes);
    });
  }
}
