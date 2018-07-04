export class KlijentPravno {
  constructor(
    public naziv: string,
    public email: string,
    public adresa: string,
    public br_telefona: string,
    public pib: string,
    public id?: number
  ) {}
}
