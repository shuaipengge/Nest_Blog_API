import { prop, getModelForClass } from '@typegoose/typegoose';

class Post {
    @prop()
    title: string
    @prop()
    content: string
    @prop()
    tag: string
}

export const PostModel = getModelForClass(Post)