import { useState } from 'react';
import { Header } from './components/Header';
import { PostList } from './components/PostList';
import { PostView } from './components/PostView';

export default function App() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      
      <main className="max-w-3xl mx-auto">
        {selectedPost ? (
          <PostView post={selectedPost} onBack={() => setSelectedPost(null)} />
        ) : (
          <div className="px-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">All Posts</h2>
            <PostList onSelectPost={setSelectedPost} />
          </div>
        )}
      </main>

      <footer className="border-t border-slate-200 mt-16 py-8 text-center text-sm text-slate-500">
        <p>© 2025 Terry's Blog. All thoughts welcome.</p>
      </footer>
    </div>
  );
}