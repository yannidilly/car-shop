# Nome do projeto
O Car Shop é um sistema back-end para anúncios de veículos, incluindo carros e motos. Com o Car Shop, os usuários podem criar anúncios para seus veículos, especificando informações como marca, modelo, ano, preço e outras características. Os anúncios podem ser visualizados por outros usuários do sistema, que podem entrar em contato com o anunciante para obter mais informações ou negociar a compra do veículo.

O sistema foi desenvolvido com tecnologias modernas e robustas, incluindo Node.js, Express, MongoDB e Mongoose, garantindo uma ótima performance e escalabilidade. Além disso, foram implementados testes unitários em Mocha para garantir a qualidade do código.

## Pré-requisitos
- Node.js
- MongoDB
- Docker
- Mocha
## Instalação
1. Clone o repositório.
2. Instale as dependências do projeto: `npm install`
3. Configure as variáveis de ambiente em um arquivo .env na raiz do projeto (você pode usar o arquivo .env.example como modelo).
4. Inicie o servidor: na raiz do projeto utilize o comando `docker-compose up -d`
5. Para acompanhar os logs do back-end use o comando `docker logs -f car_shop`

## Integrando com um front-end
Para integrar com o back-end, considere os seguintes endpoints:
- `'/cars'` do tipo POST: é possível criar um novo carro seguindo o formato abaixo:
```js
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15990,
  "doorsQty": 4,
  "seatsQty": 5
}
```
- `'/cars'` do tipo GET: é possível listar todos os carros disponíveis
- `'/cars/:id'` do tipo GET: é possível listar um carro segundo seu id
- `'/cars/:id'` do tipo PUT: é possível editar as informações de um carro seguindo o formato abaixo:
```js
{
  "model": "Marea",
  "year": 1992,
  "color": "Red",
  "status": true,
  "buyValue": 12000,
  "doorsQty": 2,
  "seatsQty": 5
}
```
- `'/motorcycles'` do tipo POST: é possível criar um novo carro seguindo o formato abaixo:
```js
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30000,
  "category": "Street",
  "engineCapacity": 600
}
```
- `'/motorcycles'` do tipo GET: é possível listar todos os carros disponíveis
- `'/motorcycles/:id'` do tipo GET: é possível listar um carro segundo seu id
- `'/motorcycles/:id'` do tipo PUT: é possível editar as informações de um carro seguindo o formato abaixo:
```js
{
  "model": "Honda Cb 600f Hornet",
  "year": 2014,
  "color": "Red",
  "status": true,
  "buyValue": 45000,
  "category": "Street",
  "engineCapacity": 600
}
```

## Arquitetura MSC
O projeto segue a arquitetura MSC (Model, Service e Controller) para separar as responsabilidades da aplicação. Aqui está uma breve descrição de cada camada:
- Model: é a camada responsável por definir o schema do banco de dados e realizar operações CRUD.
- Service: é a camada responsável por implementar a lógica de negócio da aplicação.
- Controller: é a camada responsável por lidar com as requisições HTTP e retornar as respostas adequadas.

## Testes unitários
O projeto possui testes unitários implementados usando Mocha. Para executar os testes, use o comando: `npm run test:mocha`

## Tecnologias utilizadas
- TypeScript
- Mongoose
- Mocha
