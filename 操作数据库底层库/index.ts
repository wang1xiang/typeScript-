import MysqlDB from './modules/db'
// 用户表中添加数据 定义user类和数据库表做映射
class DbUser {
  username: string|undefined
  passWord: string|undefined
}
let du = new DbUser()
du.username = 'zhangsan'
du.passWord = '123456'

let oMysql = new MysqlDB<DbUser>() // 类作为参数约束数据传入的类型
oMysql.add(du)
// console.log(oMysql.get(4));
// import { getDa as get, dbUrl } from './db'
// console.log(dbUrl);
// get() // 使用as重命名