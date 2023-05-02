import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      const newCar = new Car({
        id: car.id,
        model: car.model,
        year: car.year,
        color: car.color,
        status: (car.status) ? car.status : false,
        buyValue: car.buyValue,
        doorsQty: car.doorsQty,
        seatsQty: car.seatsQty,
      });
      return newCar;
    }
    return null;
  }

  public async createCar(car: ICar): Promise<Car | null> {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async listAllCars(): Promise<(Car | null)[]> {
    const carODM = new CarODM();
    const allCars = await carODM.getAll();
    return allCars.map((car) => this.createCarDomain(car));
  }

  public async getCarById(id: string): Promise<Car | null> {
    const carODM = new CarODM();
    const car = await carODM.getById(id);
    return this.createCarDomain(car);
  }

  public async editCar(id: string, car: ICar): Promise<Car | null> {
    const carODM = new CarODM();
    const updatedCar = await carODM.edit(id, car);
    return this.createCarDomain(updatedCar);
  }
}

export default CarService;
