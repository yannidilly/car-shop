const motorcycleId = '6348513f34c397abcad040b2';

const motorcycle = {
  id: '6348513f34c397abcad040b2',
  model: 'Honda',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleWithoutId = {
  model: 'Honda',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const newMotorcycleWithoutIdAndStatus = {
  model: 'Honda',
  year: 2005,
  color: 'Yellow',
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const newMotorcycle = {
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const allMotorcycles = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
];

export default {
  motorcycleId,
  motorcycle,
  motorcycleWithoutId,
  newMotorcycle,
  newMotorcycleWithoutIdAndStatus,
  allMotorcycles,
};