export default function Blog() {
	const [selectedPost, setSelectedPost] = useState(null);

	return (
		<div className="flex flex-col min-h-screen bg-gray-50 font-outfit">
			<Header />

			<main className="max-w-3xl mx-auto">
				{selectedPost ? (
					<PostView
						post={selectedPost}
						onBack={() => setSelectedPost(null)}
					/>
				) : (
					<div className="px-6">
						<h2 className="mb-6 text-2xl font-light text-gray-900">
							All Posts
						</h2>
						<PostList onSelectPost={setSelectedPost} />
					</div>
				)}
			</main>

			<footer className="py-8 mt-16 text-sm text-center text-gray-400 border-t border-gray-200">
				<p>© 2025 Terry's Blog. All thoughts welcome.</p>
			</footer>
		</div>
	);
}
