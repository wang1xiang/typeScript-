/*
  定义一个操作数据库的库  支持mysql Mssql mongodb
  功能一样 add delete update
  注意：约束同一的规范，以及代码宠用
  解决方案：需要约束规范所以定义接口，需要代码质量所以用到泛型
*/

interface DBI<T> {
  add(info:T): boolean
  update(info:T, id:number): boolean
  delete(id:number): boolean
  get(id:number): any[]
}
// 定义一个操作mysq的类 注意要实现泛型接口 类也要是泛型类
class MysqlDB<T> implements DBI<T> {
  add(info: T): boolean {
    console.log(info);
    return true
  }  
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    let list = [
      {
        title: 'xxx',
        desc: 'xxx'
      },{
        title: 'xxxx',
        desc: 'xxxx'
      }
    ]
    return list
  }
}

// 定义一个操作mssql的类 
class MsSqlDB<T> implements DBI<T> {
  add(info: T): boolean {
    throw new Error("Method not implemented.");
  }  
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}


export default MysqlDB