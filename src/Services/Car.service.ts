import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarORM from '../Models/CarORM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      const newCar = new Car({
        id: car.id,
        model: car.model,
        year: car.year,
        color: car.color,
        status: car.status,
        buyValue: car.buyValue,
        doorsQty: car.doorsQty,
        seatsQty: car.seatsQty,
      });
      return newCar;
    }
    return null;
  }

  public async createCar(car: ICar): Promise<Car | null> {
    const carODM = new CarORM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async listAllCars(): Promise<(Car | null)[]> {
    const carODM = new CarORM();
    const allCars = await carODM.getAll();
    return allCars.map((car) => this.createCarDomain(car));
  }

  public async getCarById(id: string): Promise<Car | null> {
    const carORM = new CarORM();
    const car = await carORM.getById(id);
    return this.createCarDomain(car);
  }

  public async editCar(id: string, car: ICar): Promise<Car | null> {
    const carORM = new CarORM();
    const updatedCar = await carORM.edit(id, car);
    return this.createCarDomain(updatedCar);
  }
}

export default CarService;
