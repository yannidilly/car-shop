import * as sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/Motorcycle.service';
import motorcycleMock from '../Mocks/motorcycle.mock';

describe('Testa a camada Service da entidade Motorcycle', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Verifica se a função createMotorcycle retorna um novo Motorcycle', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleMock.motorcycle);
    const service = new MotorcycleService();
    const result = await service.createMotorcycle(motorcycleMock.motorcycleWithoutId);
    expect(result).to.be.deep.equals(motorcycleMock.motorcycle);
  });

  it(
    'Verifica se a função createMotorcycle retorna null se houver erro no banco de dados',
    async function () {
      sinon.stub(Model, 'create').resolves(null);
      const service = new MotorcycleService();
      const result = await service.createMotorcycle(motorcycleMock.motorcycleWithoutId);
      expect(result).to.be.deep.equals(null);
    },
  );

  it(
    'Verifica se a função listAllMotorcycles retorna um array de objetos do tipo Motorcycle',
    async function () {
      sinon.stub(Model, 'find').resolves(motorcycleMock.allMotorcycles);
      const service = new MotorcycleService();
      const result = await service.listAllMotorcycles();
      expect(result).to.be.deep.equals(motorcycleMock.allMotorcycles);
    },
  );

  it(
    'Verifica se a função getMotorcycleById retorna um Motorcyclero com o id correto',
    async function () {
      sinon.stub(Model, 'findById').resolves(motorcycleMock.motorcycle);
      const service = new MotorcycleService();
      const result = await service.getMotorcycleById(motorcycleMock.motorcycleId);
      expect(result).to.be.deep.equals(motorcycleMock.motorcycle);
    },
  );

  it(
    'Verifica se a função editMotorcycle retorna o objeto do novo Motorcyclero',
    async function () {
      sinon.stub(Model, 'findOneAndUpdate').resolves(motorcycleMock.newMotorcycle);
      sinon.stub(Model, 'findById').resolves(motorcycleMock.newMotorcycle);
      const service = new MotorcycleService();
      const result = await service
        .editMotorcycle(
          motorcycleMock.motorcycleId,
          motorcycleMock.newMotorcycleWithoutIdAndStatus,
        );
      expect(result).to.be.deep.equals(motorcycleMock.newMotorcycle);
    },
  );
});