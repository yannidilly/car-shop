import { Model, Schema, model, models } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleORM {
  private schema: Schema;
  private model: Model<IMotorcycle>;

  constructor() {
    this.schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this.model = models.Motorcycle || model('Motorcycle', this.schema);
  }

  public async create(motorcycle: IMotorcycle): Promise<IMotorcycle> {
    const newMotorcycle = await this.model.create({ ...motorcycle });
    return newMotorcycle;
  }
}

export default MotorcycleORM;