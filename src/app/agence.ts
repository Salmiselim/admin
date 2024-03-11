import { Bank } from "./bank";

export class Agence {
  codeAgence: number;
  name: string;
  address: string;
  bank: Bank;

  constructor(codeAgence: number, name: string, address: string, bank: Bank) {
    this.codeAgence = codeAgence;
    this.name = name;
    this.address = address;
    this.bank = bank;
  }
}
