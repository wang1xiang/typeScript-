#### 安装编译
+ cnpm install -g typescript
+ tsc xxx.ts
vsCode配置自动编译
1.tes --init 生成配置文件tsconfig.json 修改outDir: './js'
2.终端 运行任务 tsc监视
#### typescript数据类型(增加类型校验)
+ 布尔类型(boolean)
+ 数字类型(number)
+ 字符串类型(string)
+ 数组类型(array)
+ 元组类型(tuple)
+ 枚举类型(enum)
+ 任意类型(any)
+ null undefined
+ void类型
+ never类型
+ 类型推论
  如果没有明确指定类型，typescript会按照类型推论的规则推断出一哥类型，如果定义时没赋值，会被推断为any类型
+ 联合类型
  表示取值可以为多种类型中的一种

