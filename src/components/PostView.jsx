export function PostView({ post, onBack }) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-8">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all duration-200 hover:gap-3"
      >
        <span>←</span>
        <span>Back to posts</span>
      </button>
      
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-3">{post.title}</h1>
        <time className="text-sm text-slate-500">{post.date}</time>
      </header>

      <div className="text-slate-700 leading-relaxed">
        {post.content.split('\n').map((paragraph, idx) => {
          if (paragraph.startsWith('##')) {
            return (
              <h2 key={idx} className="text-xl font-semibold text-slate-900 mt-8 mb-4">
                {paragraph.replace('## ', '')}
              </h2>
            );
          }
          if (paragraph.trim() === '') {
            return <br key={idx} />;
          }
          return (
            <p key={idx} className="mb-4">
              {paragraph}
            </p>
          );
        })}
      </div>
    </article>
  );
}