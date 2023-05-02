import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleORM from '../Models/MotorcycleORM';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      const newMotorcycle = new Motorcycle({
        id: motorcycle.id,
        model: motorcycle.model,
        year: motorcycle.year,
        color: motorcycle.color,
        status: motorcycle.status,
        buyValue: motorcycle.buyValue,
        category: motorcycle.category,
        engineCapacity: motorcycle.engineCapacity,
      });
      return newMotorcycle;
    }
    return null;
  }

  public async createMotorcycle(motorcycle: IMotorcycle): Promise<Motorcycle | null> {
    const motorcycleORM = new MotorcycleORM();
    const newMotorcycle = await motorcycleORM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async listAllMotorcycles(): Promise<(Motorcycle | null)[]> {
    const motorcycleORM = new MotorcycleORM();
    const allMotorcycles = await motorcycleORM.getAll();
    return allMotorcycles.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
  }

  public async getMotorcycleById(id: string): Promise<Motorcycle | null> {
    const motorcycleORM = new MotorcycleORM();
    const motorcycle = await motorcycleORM.getById(id);
    return this.createMotorcycleDomain(motorcycle);
  }

  public async editMotorcycle(id: string, motorcycle: IMotorcycle): Promise<Motorcycle | null> {
    const motorcycleORM = new MotorcycleORM();
    const updatedMotorcycle = await motorcycleORM.edit(id, motorcycle);
    return this.createMotorcycleDomain(updatedMotorcycle);
  }
}

export default MotorcycleService;