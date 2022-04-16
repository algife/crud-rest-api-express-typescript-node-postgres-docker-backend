import { DataSource, DataSourceOptions } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { Item } from "../models/entity/item";

const ORMCONFIG: DataSourceOptions = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432", 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [Item],
  subscribers: [],
  migrations: [],
  uuidExtension: "uuid-ossp",
  applicationName: "ts-rest-api-playground_database",
} as PostgresConnectionOptions;

class DatabaseService {
  private initialized: boolean = false;
  private readonly dataSource = new DataSource(ORMCONFIG);

  // ! Data Repositories
  public readonly itemsRepo = this.dataSource.getRepository(Item);

  constructor() {
    this._initialize();
  }

  private async _initialize() {
    // Initialize the connection with the database, register all entities
    // and "synchronize" database schema. Should be called ONCE in the app flow
    console.log("Initializing DB...");
    if (!this.initialized) {
      this.initialized = await this.dataSource
        .initialize()
        .then((ds) => {
          console.log("DB connection is ready");
          return true;
        })
        .catch((error) => {
          console.log(error);
          return false;
        });
    }
  }
}

const databaseService = new DatabaseService();
export default databaseService;
