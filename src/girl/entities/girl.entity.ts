import { Entity, ObjectId, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Girl {
  @ObjectIdColumn()
  id: ObjectId;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  age: number;

  @Column({ type: 'array' })
  skill: Array<string>;

  @Column({ type: 'int' })
  timestamp: number;
}
