import { Model, Schema, model, models } from 'mongoose';
import ICar from '../Interfaces/ICar';
import IMotorcycle from '../Interfaces/IMotorcycle';

abstract class AbstractODM<T> {
  protected schema: Schema;
  protected model: Model<T>;

  constructor(schema: Schema, modelName: 'Car' | 'Motorcycle') {
    this.schema = schema;
    this.model = models[modelName] || model(modelName, this.schema);
  }

  public async create(vehicle: T): Promise<T> {
    const newVehicle = await this.model.create({ ...vehicle });
    return newVehicle;
  }

  public async getAll(): Promise<T[]> {
    const allVehicle = await this.model.find();
    return allVehicle;
  }

  public async getById(id: string): Promise<T | null> {
    const vehicle = await this.model.findById(id);
    return vehicle;
  }

  public async edit(id: string, vehicle: ICar | IMotorcycle): Promise<T | null> {
    await this.model.findOneAndUpdate({ id }, vehicle);
    const updatedVehicle = await this.model.findById(id);
    return updatedVehicle;
  }
}

export default AbstractODM;