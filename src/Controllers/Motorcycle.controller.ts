import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import MotorcycleService from '../Services/Motorcycle.service';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;
  
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async createMotorcycle() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.createMotorcycle(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async listAllMotorcycle() {
    const allMotorcycle = await this.service.listAllMotorcycles();
    return this.res.status(200).json(allMotorcycle);
  }

  public async getMotorcycleById() {
    const { id } = this.req.params;
    if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });
    const motorcycle = await this.service.getMotorcycleById(id);
    if (motorcycle) return this.res.status(200).json(motorcycle);
    return this.res.status(404).json({ message: 'Motorcycle not found' });
  }

  public async editMotorcycle() {
    const { id } = this.req.params;
    const Motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    if (!isValidObjectId(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });
    const updatedMotorcycle = await this.service.editMotorcycle(id, Motorcycle);
    if (updatedMotorcycle) return this.res.status(200).json(updatedMotorcycle);
    return this.res.status(404).json({ message: 'Motorcycle not found' });
  }
}

export default MotorcycleController;