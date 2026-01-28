import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user.entity'

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'admin',
			password: 'mypassword',
			database: 'elearning',
			autoLoadEntities: true,
			synchronize: true,
			logging: true, // Terminalda SQL so'rovlarni ko'rish uchun
			entities: [User], // User klassini shu yerga yozib qo'yish kerak
		}),
	],
})
export class AppModule {}
