import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Players {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255 })
  identifier: string;

  @Column()
  name: string;
}
