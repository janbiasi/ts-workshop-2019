/**
 * @fileoverview
 *
 * Beginners 02: Types.
 * - Learn how to create types
 * - Learn how to use types
 *
 * Tipps:
 * - Hover+command values to see what the TypeScript compiler does with the typings
 */



type PostStatus = 'draft' | 'published';

interface IPost {
    title: string,
    status: PostStatus
}

const myPost: IPost = {
    title: 'My first post',
    status: 'draft'
}

// [[TODO 1]] Try to set the status of `myPost` to 'rejected' and see what happens



type PostPublishFn = (post: IPost) => IPost;

const publishPost: PostPublishFn = (post: IPost) => ({
    ...post,
    status: 'published'
});

// [[TODO 2]] Use the publish post function and modify all types that
// the post also has an optional published date which will set on `publishPost`