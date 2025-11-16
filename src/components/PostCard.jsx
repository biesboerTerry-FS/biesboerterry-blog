import { ChevronRight } from "lucide-react";

export function PostCard({ post, onClick }) {
	return (
		<article
			onClick={onClick}
			className="group cursor-pointer py-8 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 px-6 transition-colors duration-200"
		>
			<div className="flex items-start justify-between gap-4">
				<div className="flex-1 min-w-0">
					<h2 className="text-xl font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
						{post.title}
					</h2>

					{post.imageUrl && (
						<div className="mt-4 mb-4 overflow-hidden rounded-lg max-h-64">
							<img
								src={post.imageUrl}
								alt={post.imageAlt || post.title}
								className="w-full h-auto object-cover group-hover:opacity-90 transition-opacity"
							/>
						</div>
					)}

					<p className="text-sm text-gray-400 mt-1">{post.date}</p>
					<p className="text-gray-600 mt-3 leading-relaxed">
						{post.excerpt}
					</p>
				</div>
				<ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gray-500 flex-shrink-0 mt-1 transition-colors" />
			</div>
		</article>
	);
}
