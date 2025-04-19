import { Module } from '@nestjs/common'
import { TaskModule } from './task/task.module'
import { ConfigModule } from '@nestjs/config'

@Module({
	imports: [ConfigModule.forRoot(), TaskModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
