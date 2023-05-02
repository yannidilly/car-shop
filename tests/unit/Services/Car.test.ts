import * as sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/Car.service';
import carMock from '../Mocks/car.mock';

describe('Testa a camada Service da entidade Car', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Verifica se a função createCar retorna um novo Car', async function () {
    sinon.stub(Model, 'create').resolves(carMock.car);
    const service = new CarService();
    const result = await service.createCar(carMock.carWithoutId);
    expect(result).to.be.deep.equals(carMock.car);
  });

  it(
    'Verifica se a função createCar retorna null se houver erro no banco de dados',
    async function () {
      sinon.stub(Model, 'create').resolves(null);
      const service = new CarService();
      const result = await service.createCar(carMock.carWithoutId);
      expect(result).to.be.deep.equals(null);
    },
  );

  it('Verifica se a função listAllCars retorna um array de objetos do tipo Car', async function () {
    sinon.stub(Model, 'find').resolves(carMock.allCars);
    const service = new CarService();
    const result = await service.listAllCars();
    expect(result).to.be.deep.equals(carMock.allCars);
  });

  it('Verifica se a função getCarById retorna um carro com o id correto', async function () {
    sinon.stub(Model, 'findById').resolves(carMock.car);
    const service = new CarService();
    const result = await service.getCarById(carMock.carId);
    expect(result).to.be.deep.equals(carMock.car);
  });

  it('Verifica se a função editCar retorna o objeto do novo carro', async function () {
    sinon.stub(Model, 'findOneAndUpdate').resolves(carMock.newCar);
    sinon.stub(Model, 'findById').resolves(carMock.newCar);
    const service = new CarService();
    const result = await service.editCar(carMock.carId, carMock.newCarWithoutIdAndStatus);
    expect(result).to.be.deep.equals(carMock.newCar);
  });
});