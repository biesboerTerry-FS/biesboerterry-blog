export default function Blog() {
	const [selectedPost, setSelectedPost] = useState(null);

	return (
		<div className="min-h-screen bg-white ">
			<Header />

			<main className="max-w-3xl mx-auto">
				{selectedPost ? (
					<PostView
						post={selectedPost}
						onBack={() => setSelectedPost(null)}
					/>
				) : (
					<div className="px-6">
						<h2 className="text-2xl font-light text-gray-900 mb-6">
							All Posts
						</h2>
						<PostList onSelectPost={setSelectedPost} />
					</div>
				)}
			</main>

			<footer className="border-t border-gray-200 mt-16 py-8 text-center text-sm text-gray-400">
				<p>© 2025 Terry's Blog. All thoughts welcome.</p>
			</footer>
		</div>
	);
}
