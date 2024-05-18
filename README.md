## API Docs

> localhost:3000/swagger

## 导入apifox

> localhost:3000/swagger.json

## TODO

* use mongodb docker local

## cli

* nodejs
* docker(or docker desktop)
* pnpm(or npm)
* git

## 云端mongodb

## 本地mongodb

## mongodb 权限管理

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
