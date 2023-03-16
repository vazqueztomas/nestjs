import { Injectable } from "@nestjs/common";
import { Cat } from "./interfaces/cat.interface";

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [{name: 'siames', age: 21, breed: 'Toto'}];

  create(cat: Cat){
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats
  }

  findByName(name: string): Cat[]{
    console.log(name);
    let foundByName = this.cats.filter((cat) => cat.name == name)
    return foundByName
  }
}