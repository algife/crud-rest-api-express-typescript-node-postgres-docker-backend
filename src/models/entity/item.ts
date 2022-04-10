import { faker } from "@faker-js/faker";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

const nowUtcSql: string = "current_timestamp"; //"(now() AT TIME ZONE 'UTC')";

@Entity({ name: "item" })
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn("uuid", { name: "id" }) public readonly id?: string; //  = uuidv4();

  @Column("varchar", { name: "p1" }) public p1: string = "";
  @Column("float", { name: "p2" }) public p2: number = -1;

  @CreateDateColumn({
    type: "timestamp",
    default: () => nowUtcSql,
  })
  public created_at?: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => nowUtcSql,
    onUpdate: nowUtcSql,
  })
  public updated_at?: Date;
}
