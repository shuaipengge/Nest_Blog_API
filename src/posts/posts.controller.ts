import { Controller, Get, Post } from '@nestjs/common';

@Controller('posts')
export class PostsController {
    @Get()
    index() {
        return [
            { id: 1 }
        ]
    }

    @Post()
    create(){
        return {
            success: true
        }
    }

    @Get(':id')
    detail(){
        return {
            success: true,
            data:[
                {id:1, title: 'hello'}
            ]
        }
    }
}
