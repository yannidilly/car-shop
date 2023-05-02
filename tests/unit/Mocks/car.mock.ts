const carId = '6348513f34c397abcad040b2';

const car = {
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carWithoutId = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const newCarWithoutIdAndStatus = {
  model: 'Tempra',
  year: 1995,
  color: 'Black',
  buyValue: 39,
  doorsQty: 2,
  seatsQty: 5,
};

const newCar = {
  id: '6348513f34c397abcad040b2',
  model: 'Tempra',
  year: 1995,
  color: 'Black',
  status: true,
  buyValue: 39,
  doorsQty: 2,
  seatsQty: 5,
};

const allCars = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    status: false,
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];

export default {
  carId,
  car,
  carWithoutId,
  newCar,
  newCarWithoutIdAndStatus,
  allCars,
};