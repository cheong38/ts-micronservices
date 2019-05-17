# Typescript Microservices Example

## 환경
- docker
- nodejs 10.x

## 데이터베이스 세팅
- run-dbs.sh 를 실행하여 데이터베이스 세팅
- localhost:3307(plans-db)에 접속하여 아래 쿼리를 실행한다.
```
> CREATE SCHEMA PlansDb CHARACTER SET 'utf8mb4';
``` 

- localhost:3308(subscriptions-db) 에 접속하여 아래 쿼리를 실행한다.
```
> CREATE SCHEMA SubscriptionsDb CHARACTER SET 'utf8mb4';
``` 

- `plans-service` 폴더에서 db migration 을 수행한다.
