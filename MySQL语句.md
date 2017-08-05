### MySQL语句

#### 一. 创建数据库

##### 创建本地数据库(http://localhost/phpmyadmin)

* 新建一个数据库 起名 创建

* ```
  CREATE DATABASE 0404SQL
  ```

#### 二. 创建表

* 新建一个表 根据自己的需求 起名 (如: student)

* ```
  USE 数据库名 CREATE TABLE 表名 (
  列名 类型(大小) DEFAULT'默认值',
  列名 类型(大小) DEFAULT'默认值',  
  列名 类型(大小) DEFAULT'默认值',
  ... ...);
  ```

* 表里的内容 名字 类型 长度 根据自己的需求设置

#### 三. 查询表

##### 1.查询

* ```
  SELECT * FROM student
  ```

* 意思是查询student表里面的所有字段以及值

* '*' 代表所有, * + 你要查询的字段

*  SELECT name, age, gradeclass FROM student

* 可以指定你要查询的字段(name, age等)

##### 2.条件查询

###### 1. 单个字段查询

* ```
  SELECT * FROM student WHERE name = "小红"
  ```

* 条件在表名后面,使用WHERE

* WHERE后面设置条件

###### 2.AND查询条件

* ```
  SELECT * FROM student WHERE name = "小红" AND age = 18
  ```

* 必须同时满足WHERE后面的条件

* WHERE后面设置条件 条件用AND拼接 可以写多个

###### 3. OR查询条件

* ```
  SELECT * FROM student WHERE name = "小红" OR age = 18
  ```

* 只要满足OR任意一边的条件都可以

###### 4. 模糊查询条件

* ```
  SELECT * FROM student WHERE name LIKE "小%"
  ```

* % 代表0个或多个字符

* _ 代表一个字符

* %计% 这种查询,只要带有 计 字就行

#### 四. 表中插入数据

* ```
  INSERT INTO student(name,age,address) VALUES("小红",16,"小二班")
  ```

* 注意: 字段的顺序和值得顺序一定要一一对应的关系

* 字段可以不全写,比如我不想写年龄,就不需要写age

#### 五. 表中删除数据

* ```
  DELETE FROM student WHERE name = "小红"
  ```

* 注意: 如果不给条件,将删除表中所有数据(数据删除,表格结构仍然在)

#### 六. 表中修改数据

* ```
  UPDATE student SET age = 30 WHERE name = "小红"
  ```

* 更改小红的年龄为30

* 注意: : 如果不写条件,会修改所有这个字段的值

* ```
  UPDATE student SET age = age + 1
  ```

* 所有人年龄加1(没有++和+=)

#### 七. 删除表

##### 1.drop(删除表)

* ```
  DROP TABLE 表名
  ```

* 删除内容和定义，释放空间。简单来说就是**把整个表去掉**.以后要新增数据是不可能的,除非新增一个表

##### 2.truncate (清空表中的数据)

* ```
  TRUNCATE TABLE 表名
  ```

* truncate (清空表中的数据)：删除内容、释放空间但不删除定义(**保留表的数据结构**)。与drop不同的是,只是清空表数据而已