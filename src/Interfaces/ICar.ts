interface ICar {
  id?: string | undefined;
  model: string;
  year: number;
  color: string;
  status?: boolean;
  buyValue: number;
  doorsQty: number;
  seatsQty: number;
}

export default ICar;