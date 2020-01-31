import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';

class CreatePostDto {
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
    @ApiOperation({ summary: '显示博客列表' })
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
        body
        return {
            success: true,
            data:[{ id: 1, body: body }]
    }
}

@Get(':id')
detail() {
    return {
        success: true,
        data: [
            { id: 1, title: 'hello' }
        ]
    }
}
}
