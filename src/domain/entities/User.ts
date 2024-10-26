import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
    id!: string

  @Column()
    name!: string

  @Column({ unique: true })
    email!: string

  @Column()
    password!: string

  @Column()
    phone!: string

  // Token to handle refresh tokens for JWT-based sessions
  @Column({ nullable: true })
  refreshToken?: string;

  @CreateDateColumn()
    createdAt!: Date

  @UpdateDateColumn()
    updatedAt!: Date
}