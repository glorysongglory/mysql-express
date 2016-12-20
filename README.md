# mysql-express

a mysql tools for express

### 安装

```
npm install git+https://github.com/hapjs/mysql-express.git
```

### 使用

```js
var app = require('express')();
var helper = require('mysql-express')({
    'host': 'localhost',
    'port': 3306,
    'database': 'mydb',
    'user': 'test',
    'password': 'test',
    'charset': 'UTF8_GENERAL_CI',
});

app.get('/list', function(req, res){
    helper.getRows({
        res: res,
		table: 'user',
        page: req.query.page,
        size: req.query.size,
        where: {
            'status': 1
        },
        orderBy: 'user_id DESC',
    });
});

app.listen(3000);
```

### API

```
// 创建数据库连接，执行callback函数，然后关闭连接
connection(callback)

// 对sql语句进行格式化
sqlFormat(sql, values)

// 数据库查询
query(sql, values, callback)

// 批量查询
batQuery(sqls, values, callback)

// 批量插入
batInsert(table, values, callback)

// 查询操作
select(opt)

// 查询列表并返回结果
getRows(opt)

// 查询一条记录并返回结果
getRow(opt)

// 插入记录
insertRow(opt)

// 更新记录
updateRow(opt)

// 删除记录
deleteRow(opt)
```