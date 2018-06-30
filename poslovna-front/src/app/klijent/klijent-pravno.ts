export class KlijentPravno {
  constructor(
    public naziv: string,
    public email: string,
    public adresa: string,
    public brTel: string,
    public pib: string,
    public id?: number
  ) {}
}
