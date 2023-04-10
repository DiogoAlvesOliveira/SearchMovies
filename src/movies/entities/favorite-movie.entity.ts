import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class FavoriteMovie {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ length: 255 })
  title: string;
}
