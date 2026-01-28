import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	// CORS ni yoqish (Frontend ulanishi uchun kerak bo'ladi)
	app.enableCors()

	// Loyihani 3000-portda ishga tushiramiz
	await app.listen(3000)
	console.log(`🚀 Server is running on: http://localhost:3000`)
}
bootstrap()
