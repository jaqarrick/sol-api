import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './config';
import { User } from './users/entities/user.entity';

const typeOrmOptions = {
  ...dbConfig,
  entities: [User]
}

@Module({
  imports: [
    UsersModule,
    PostsModule,
    TypeOrmModule.forRoot(typeOrmOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
