import { name1, getName, Directions, Options } from './declare'

console.log(name1);
let myName = getName()
let directions = [Directions.Up, Directions.Left]
let options: Options = {
  data: {
    name: 'foo'
  }
}