import { Injectable } from '@angular/core';
import { Wallet } from 'ethers';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  mnemonic: Array<string> = [];
  address: string = "";

  constructor() { }

  generateMnemonic() {
    let newWallet = Wallet.createRandom();
    this.mnemonic = newWallet.mnemonic!.phrase.split(" ");
    this.address = newWallet.address
  }

}
