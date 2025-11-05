import { PostCard } from './PostCard';
import { posts } from '../data/posts';

export function PostList({ onSelectPost }) {
  return (
    <div className="divide-y divide-gray-100">
      {posts.map(post => (
        <PostCard 
          key={post.id} 
          post={post}
          onClick={() => onSelectPost(post)}
        />
      ))}
    </div>
  );
}