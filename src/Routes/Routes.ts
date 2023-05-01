import { Router } from 'express';
import CarController from '../Controllers/Car.controller';

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

export default routes;