import app from './app';
import request from 'supertest';
import * as tescontainerMongoose from 'testcontainers-mongoose';

describe("GET /api/products", () => {
  jest.setTimeout(60000)

  let connectionString = '';

  beforeAll(async () => {
    await tescontainerMongoose.connect('mongo:latest')

  })

  afterAll(async () => {
    await tescontainerMongoose.closeDatabase()
  })

  afterEach(async () => {
    await tescontainerMongoose.clearDatabase()
  }) 

  it("should create new cat", async () => {
    const res = await request(app)
      .post("/api")
      .send({ name: 'MiaTESTx', age: 4 })
      ;
    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBeDefined();
    expect(res.body.name).toEqual('MiaTESTx');
    expect(res.body.age).toEqual(4)
  });


  it("should return all cats", async () => {
    const res = await request(app).get("/api");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(0);
  });
});