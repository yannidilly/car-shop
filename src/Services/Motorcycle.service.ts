import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleORM from '../Models/MotorcycleORM';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle): Motorcycle | null {
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
}

export default MotorcycleService;