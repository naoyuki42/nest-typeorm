import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './app/user/user.module';
import { PhotoModule } from './app/photo/photo.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, PhotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
