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


