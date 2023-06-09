import { Router } from 'express';
import CarController from '../Controllers/Car.controller';
import MotorcycleController from '../Controllers/Motorcycle.controller';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).createCar(),
);
routes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).getCarById(),
);
routes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).listAllCars(),
);
routes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).editCar(),
);

routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).createMotorcycle(),
);
routes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getMotorcycleById(),
);
routes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).listAllMotorcycle(),
);
routes.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).editMotorcycle(),
);

export default routes;