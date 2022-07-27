import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}
  async create(createPostDto: CreatePostDto) {
    const post = {
      ...createPostDto,
      authorId: 4,
    };
    return await this.postsRepository.save(post);
  }

  async findAll() {
    return await this.postsRepository.find();
  }

  findOne(id: number) {
    return this.postsRepository.findOneBy({ id });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This act  ion updates a #${id} post`;
  }

  remove(id: number) {
    this.postsRepository.delete(id);
    return `This action removes a #${id} post`;
  }
}
