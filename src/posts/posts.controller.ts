import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator'
import { InjectModel } from 'nestjs-typegoose';
import {Post as PostSchema} from './posts.model'
import { ModelType } from '@typegoose/typegoose/lib/types';

class CreatePostDto {
    @ApiProperty({ description: '帖子标题', example: '帖子标题1' })
    @IsNotEmpty({message: '请填写标题'})  // 判断值是否为空
    title: string
    @ApiProperty({ description: '帖子内容', example: '帖子内容1' })
    content: string
    @ApiProperty({ description: '帖子标签', example: '帖子标签1' })
    tag: string
}

class UpdatePostDto {
    @ApiProperty({ description: '帖子标题', example: '帖子标题2' })
    @IsNotEmpty({message: '请填写标题'})  // 判断值是否为空
    title: string
    @ApiProperty({ description: '帖子内容', example: '帖子内容2' })
    content: string
    @ApiProperty({ description: '帖子标签', example: '帖子标签2' })
    tag: string
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
    // 依赖注入
    constructor(@InjectModel(PostSchema) private readonly postModel: ModelType<PostSchema>){}

    @Get()
    @ApiOperation({ summary: '博客列表' })
    async index() {
        return await this.postModel.find()
    }

    @Post()
    @ApiOperation({ summary: '创建博客' })
    // 参数装饰器
    // @Query() Query, @Param() param
    async create(@Body() CreatePostDto: CreatePostDto) {
        await this.postModel.create(CreatePostDto)
        return {
            success: true
        }
    }

    @Get(':id')
    @ApiOperation({ summary: '博客详情' })
    async detail(@Param('id') id: string) {
        let data = await this.postModel.findById(id)
        return {
            success: true,
            data: [data]
        }
    }

    @Put(':id')
    @ApiOperation({ summary: '修改博客' })
    async update(@Param('id') id: string, @Body() UpdatePostDto: UpdatePostDto) {
        await this.postModel.findByIdAndUpdate(id, UpdatePostDto)
        return {
            success: true
        }
    }

    @Delete(':id')
    @ApiOperation({ summary: '删除博客' })
    async remove(@Param('id') id: string) {
        await this.postModel.findByIdAndDelete(id)
        return {
            success: true
        }
    }

}
