import { Component } from '@angular/core';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-phrase-area',
  templateUrl: './phrase-area.component.html',
  styleUrls: ['./phrase-area.component.css']
})
export class PhraseAreaComponent {

  constructor(public wallet: WalletService) { }


}
