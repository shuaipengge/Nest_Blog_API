import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
    @Get()
    @ApiOperation({summary:'显示博客列表'})
    index() {
        return [
            { id: 1 }
        ]
    }

    @Post()
    @ApiOperation({summary:'创建博客'})
    create() {
        return {
            success: true
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
