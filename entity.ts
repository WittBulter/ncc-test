import { IsNotEmpty } from 'class-validator'
import {
  Entity, BaseEntity, ObjectIdColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm'


@Entity('sessions')
export class Session extends BaseEntity {
  
  @ObjectIdColumn()
  id: string
  
  @IsNotEmpty({ message: 'must include username' })
  username: string
  
  @CreateDateColumn()
  created_at: Date
  
  @UpdateDateColumn()
  updated_at: Date
}
