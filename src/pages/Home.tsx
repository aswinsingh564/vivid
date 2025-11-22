import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import BottomNav from "@/components/BottomNav";

const posts = [
  {
    id: 1,
    username: "sarah_creative",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=800&fit=crop",
    likes: 1234,
    caption: "Beautiful sunset at the beach 🌅",
    timeAgo: "2h ago",
  },
  {
    id: 2,
    username: "john_adventures",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    image: "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=800&h=800&fit=crop",
    likes: 856,
    caption: "Mountain vibes ⛰️",
    timeAgo: "5h ago",
  },
];

const stories = [
  { id: 1, username: "Your Story", avatar: null, isAdd: true },
  { id: 2, username: "emma_j", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma" },
  { id: 3, username: "mike_photos", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" },
  { id: 4, username: "lisa_art", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa" },
  { id: 5, username: "david_t", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David" },
];

const Home = () => {
  return (
    <div className="min-h-screen pb-20 bg-gradient-to-b from-background to-background/95">
      {/* Top Bar */}
      <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-xl border-b border-border px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">
            Vivid
          </h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Heart className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Send className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Stories */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex gap-4">
            {stories.map((story) => (
              <button
                key={story.id}
                className="flex flex-col items-center gap-2 min-w-[70px] hover-scale"
              >
                <div className={`relative ${story.isAdd ? '' : 'p-[3px] bg-gradient-to-tr from-primary via-secondary to-accent rounded-full'}`}>
                  {story.isAdd ? (
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                      <Plus className="h-6 w-6 text-muted-foreground" />
                    </div>
                  ) : (
                    <Avatar className="w-16 h-16 border-2 border-card">
                      <AvatarImage src={story.avatar} />
                      <AvatarFallback>{story.username[0]}</AvatarFallback>
                    </Avatar>
                  )}
                </div>
                <span className="text-xs text-foreground truncate max-w-[70px]">
                  {story.username}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="max-w-2xl mx-auto">
        {posts.map((post) => (
          <Card key={post.id} className="mb-4 rounded-3xl overflow-hidden shadow-soft border-0">
            {/* Post Header */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={post.avatar} />
                  <AvatarFallback>{post.username[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">{post.username}</p>
                  <p className="text-xs text-muted-foreground">{post.timeAgo}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>

            {/* Post Image */}
            <div className="aspect-square bg-muted">
              <img
                src={post.image}
                alt="Post"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Post Actions */}
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon" className="rounded-full hover-scale">
                    <Heart className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover-scale">
                    <MessageCircle className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover-scale">
                    <Send className="h-6 w-6" />
                  </Button>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full hover-scale">
                  <Bookmark className="h-6 w-6" />
                </Button>
              </div>

              {/* Likes & Caption */}
              <div className="space-y-1">
                <p className="font-semibold text-sm">{post.likes.toLocaleString()} likes</p>
                <p className="text-sm">
                  <span className="font-semibold">{post.username}</span>{" "}
                  {post.caption}
                </p>
                <button className="text-sm text-muted-foreground">
                  View all comments
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
