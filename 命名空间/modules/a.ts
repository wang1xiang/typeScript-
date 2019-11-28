export namespace A {
  export class User {
    name: string | undefined
    constructor(name: string) {
      this.name = name
    }
    run(): void {
      console.log(this.name);
    }
  }
}
// 命名空间作为模块