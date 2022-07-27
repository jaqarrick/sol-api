import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './config';
import { User } from './users/entities/user.entity';
import { DataSource } from 'typeorm';
import { Post } from './posts/entities/post.entity';

const typeOrmOptions = {
  ...dbConfig,
  entities: [User, Post],
};
console.log(typeOrmOptions);

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmOptions), UsersModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
