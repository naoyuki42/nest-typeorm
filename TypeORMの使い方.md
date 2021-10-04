# TypeORMの使い方
## 前提条件
|         |ver      |
|---------|:-------:|
| Node.js | 16.10.0 |
| MySQL   | 8.0.26  |
| Nest.js | 8.1.1   |
| TypeORM | 0.2.37  |

※TypeORMは後でインストールを実施

<br>

## 1. 各種インストール
- TypeORMのインストール  
```
npm install --save @nestjs/typeorm typeorm mysql2
```

<br>

- ts-nodeのインストール  
```
npm install --save ts-node
```
<br>

## 2. 環境設定
- `ormconfig.json`ファイルの作成  
  プロジェクト内に`ormconfig.json`というファイルを作成  
  ファイル内の記述は下記の通り（詳細は省略）
```
{
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "<name>",
    "password": "<pass>",
    "database": "<database>",
    "entities": ["src/entities/*.entity{.ts,.js}"],
    "migrations": ["src/migrations/*{.ts,.js}"],
    "synchronize": false
}
```

<br>

- 各種ディレクトリの作成  
  `src`ディレクトリ内に`entities`と`migrations`というフォルダを作成

<br>

- 各種エンティティファイルの作成

<br>

## 3. マイグレーションの実施
- マイグレーションファイルの作成  
下記コマンドでmigrationsディレクトリ内にマイグレーションファイルが作成される  
※`<name>`に入力した文字がファイル名に使用される  
    >例）1633326613530-user.ts
```
npx ts-node ./node_modules/typeorm/cli migration:generate -d src/migrations -n <name>
```

<br>

- マイグレーションの実施  
下記コマンドでマイグレーションが実施される
```
npm run typeorm:migration:run
```