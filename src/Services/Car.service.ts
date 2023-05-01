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

  public async createCar(car: ICar) {
    const carODM = new CarORM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }
}

export default CarService;
