import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({nullable: true, unique: true})
  email: string;
}
