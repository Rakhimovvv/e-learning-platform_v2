import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id!: number // ? emas, ! qo'ying

	@Column()
	full_name!: string

	@Column({ unique: true })
	email!: string

	@Column()
	password!: string

	@Column({ default: 'STUDENT' })
	role!: string

	@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
	created_at!: Date
}
