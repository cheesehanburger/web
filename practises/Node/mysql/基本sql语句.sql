-- 通过*查询所有的数据
-- select * from users


-- 可以指定查询列
-- select username, password from users

-- 插入语句
-- insert into users (username,password) values ('tony stark','098123')

-- 更新语句
-- update users set password = 888888 where id = 4
-- update users set password = 'admin123',status = 1 where id = 2

-- 删除语句
-- delete from users where id = 4

-- where子句
-- select * from users where status=0
-- select * from users where status <> 1

-- and 和 or 筛选
-- select * from users where status = 0 and id < 3
-- select * from users where status or username = 'zs'

-- order by 排序  默认ASC升序 DESC降序
-- select * from users order by id
-- select * from users order by id DESC
-- 多重排序
-- select * from users order by status desc, id asc

-- count计数
-- select count(*) from users where status = 0

-- as起别名
-- select count(*) as total from users
select username as 用户,password as 密码 from users