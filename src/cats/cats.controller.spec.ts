import { Test, TestingModule } from "@nestjs/testing";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";

describe('CatsController', () => {
  let catController : CatsController;

  beforeEach(async () => {
    const app : TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService]
    }).compile();

    catController = app.get<CatsController>(CatsController)
  })

  describe('find all cat ', () => {
    it('should return all cats', () => {
      return catController.findAll().then(data => {
        expect(data).toEqual([{"age": 21, "breed": "Toto", "name": "siames"}])
      })
    })
  })
})