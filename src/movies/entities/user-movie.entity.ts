import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserMovie {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ length: 100 })
  name: string;
  @Column({ length: 20 })
  password: string;
}
