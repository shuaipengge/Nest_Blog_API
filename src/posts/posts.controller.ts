import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';

class CreatePostDto {
    @ApiProperty({ description: '帖子标题' })
    title: string
    @ApiProperty({ description: '帖子内容' })
    content: string
    @ApiProperty({ description: '帖子标签' })
    tag: string
}

class UpdatePostDto {
    @ApiProperty({ description: '帖子标题' })
    title: string
    @ApiProperty({ description: '帖子内容' })
    content: string
    @ApiProperty({ description: '帖子标签' })
    tag: string
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
    @Get()
    @ApiOperation({ summary: '博客列表' })
    index() {
        return [
            { id: 1 }
        ]
    }

    @Post()
    @ApiOperation({ summary: '创建博客' })
    // 参数装饰器
    // @Query() Query, @Param() param
    create(@Body() body: CreatePostDto) {
        return {
            success: true,
            data: [{ id: 1, body: body }]
        }
    }

    @Get(':id')
    @ApiOperation({ summary: '博客详情' })
    detail(@Param('id') id: string) {
        return {
            success: true,
            data: [
                { id: id, title: 'hello' }
            ]
        }
    }

    @Put(':id')
    @ApiOperation({ summary: '修改博客' })
    update(@Param('id') id: string, @Body() body: UpdatePostDto) {
        return {
            success: true,
            data: [{ id: 1, body: body }]
        }
    }

    @Delete(':id')
    @ApiOperation({ summary: '删除博客' })
    remove(@Param('id') id: string) {
        return {
            success: true,
            data: [{ id: id }]
        }
    }

}
