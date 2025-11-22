import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BottomNav from "@/components/BottomNav";

const notifications = [
  {
    id: 1,
    type: "follow",
    user: "emma_j",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    message: "started following you",
    time: "2h ago",
  },
  {
    id: 2,
    type: "like",
    user: "mike_photos",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    message: "liked your post",
    time: "5h ago",
    thumbnail: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    type: "comment",
    user: "lisa_art",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    message: "commented: Amazing shot! 🔥",
    time: "1d ago",
    thumbnail: "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=100&h=100&fit=crop",
  },
];

const Notifications = () => {
  return (
    <div className="min-h-screen pb-20 bg-gradient-to-b from-background to-background/95">
      <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-xl border-b border-border px-4 py-3">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-xl font-semibold">Notifications</h1>
        </div>
      </header>
      <div className="max-w-2xl mx-auto px-4 py-4 space-y-2">
        {notifications.map((notification) => (
          <Card key={notification.id} className="p-4 rounded-2xl shadow-soft border-0">
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src={notification.avatar} />
                <AvatarFallback>{notification.user[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-semibold">{notification.user}</span>{" "}
                  {notification.message}
                </p>
                <p className="text-xs text-muted-foreground">{notification.time}</p>
              </div>
              {notification.type === "follow" ? (
                <Button className="gradient-teal hover:opacity-90 rounded-xl h-9 px-4 font-semibold text-sm">
                  Follow
                </Button>
              ) : notification.thumbnail ? (
                <img
                  src={notification.thumbnail}
                  alt="Post thumbnail"
                  className="w-12 h-12 rounded-lg object-cover"
                />
              ) : null}
            </div>
          </Card>
        ))}
      </div>
      <BottomNav />
    </div>
  );
};

export default Notifications;
