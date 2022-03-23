import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

valor="0";

mostraValor(){

  this.valor=this.valor+"7"
}
  constructor() {}

}
