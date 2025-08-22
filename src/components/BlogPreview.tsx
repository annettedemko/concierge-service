import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogPostCard from '@/components/BlogPostCard';
import { ScrollArea } from '@/components/ui/scroll-area';

const blogPosts = [
  {
    id: 1,
    title: "Surviving German Bureaucracy with a Smile",
    excerpt: "Our assistants untangle your paperwork chaos so you don't have to lose your mind.",
    date: "July 5, 2025",
    slug: "german-bureaucracy",
    category: "Tips",
    imageUrl: "/german-bureaucracy.jpg"
  },
  {
    id: 2,
    title: "From Train to Apartment: Munich Expat Tips",
    excerpt: "How a personal concierge can help you settle into German life without stress or language panic.",
    date: "June 29, 2025",
    slug: "expat-tips-munich",
    category: "Relocation",
    imageUrl: "/expat-tips-munich.jpg"
  },
  {
    id: 3,
    title: "Behind the Scenes: A Day in the Life of a Concierge",
    excerpt: "Ever wondered how we make the impossible look easy? Come behind the curtain.",
    date: "June 15, 2025",
    slug: "behind-the-scenes",
    category: "Inside Look",
    imageUrl: "/behind-the-scenes.jpg"
  }
];

const BlogPreview = () => {
  return (
    <section id="blog" className="py-12 md:py-24 px-4 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Newspaper size={20} className="text-black" />
              <span className="text-black font-medium">Our Blog</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Latest Updates</h2>
            <p className="text-gray-800 max-w-xl">
              Explore our latest insights on smart solutions, relocation tips, and concierge life in Munich.
            </p>
          </div>
          <Link to="/blog" className="mt-4 md:mt-0">
            <Button variant="outline" className="group border-black text-black hover:bg-black hover:text-white">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="relative">
          <ScrollArea className="w-full">
            <div className="flex gap-6 pb-4 md:hidden overflow-x-auto snap-x snap-mandatory pl-1">
              {blogPosts.map((post) => (
                <div key={post.id} className="flex-none w-[85%] snap-center">
                  <BlogPostCard {...post} />
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} {...post} />
            ))}
          </div>

          {/* Mobile Pagination */}
          <div className="mt-4 flex justify-center md:hidden">
            <div className="flex gap-1">
              {blogPosts.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full ${i === 0 ? 'w-6 bg-gray-800' : 'w-2 bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
