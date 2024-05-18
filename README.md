> 这是一个 nestjs 学习项目, 支持 swagger, mongodb(docker).

## API Docs Address

> localhost:3000/swagger

## 导入 APIFOX

> localhost:3000/swagger.json

## TODO

* use mongodb docker local
* 支持自动 import/export

## CLI

* nodejs
* docker(or docker desktop)
* pnpm(or npm)
* git

## 云端 MONGODB

## 本地 MONGODB

## MONGODB 权限管理

```bash
docker containers ls  # 获取对应的 container id
docker exec -it <container_id> mongosh  # 进入mongosh

use admin  # 切换到 oeyoewsdb, you should create new table(oeyoewsdb)
db.createUser( { user:"root", pwd: 'root', roles:[ "readWrite" ]} )  # 新增root
exit

# others
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker-compose up -d

nest g resources
```


## Recipes

* mongodb compress(application) or mongodb express(docker image)
* mongodb for vscode(extensions)
* 启动docker 对应的镜像的时候, docker dameon(守护程序) 应该先打开(Windows10(11) 直接打开docker desktop 即可)
* 如果希望避开权限问题, 不要制定database, 默认就会创建一个test
* 如果希望制定对应的数据库表, 需要手动使用mongodb 创建对应的权限(需要自行了解docker 和mongodb 的相关内容)
* 如果不希望使用docker, 可以直接使用mongodb 的免费云端数据库(网络或者账户问题, 需要自备梯子)
* 支持swagger, apifox, restful-client, thunder-client
