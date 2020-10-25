import { Main } from './main';
import { Weather } from './weather';
export class Previsao {
    dt: number;
    main: Main;
    weather: Weather[];
}