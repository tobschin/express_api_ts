import app from './app';
import request from 'supertest';
import {connectDb, closeDB} from './database';


describe("GET /api/products", () => {
    beforeEach(async () => {
        await connectDb()
    })

    afterEach(async () => {
        await closeDB()
    })

    it("should create new cat", async () => {
        const res = await request(app)
        .post("/api")
        .send({name : 'Mia', age : 4})
        ;
        expect(res.statusCode).toBe(200);
        expect(res.body._id).toBeDefined();
        expect(res.body.name).toEqual('Mia');
        expect(res.body.age).toEqual(4)
      });


    it("should return all cats", async () => {
      const res = await request(app).get("/api");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
});