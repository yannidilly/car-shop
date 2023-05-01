import { Model, Schema, model, models } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarORM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    const newCar = await this.model.create({ ...car });
    return newCar;
  }

  public async getAll(): Promise<ICar[]> {
    const allCars = await this.model.find();
    return allCars;
  }
}

export default CarORM;