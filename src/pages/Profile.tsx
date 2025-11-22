import { Settings, Grid, Bookmark, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BottomNav from "@/components/BottomNav";

const profilePosts = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  image: `https://images.unsplash.com/photo-${1682687220000 + i * 1000}?w=400&h=400&fit=crop`,
}));

const Profile = () => {
  return (
    <div className="min-h-screen pb-20 bg-gradient-to-b from-background to-background/95">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-xl border-b border-border px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold">sarah_creative</h1>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Settings className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4">
        {/* Profile Info */}
        <div className="py-6 space-y-6">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="p-[3px] bg-gradient-to-tr from-primary via-secondary to-accent rounded-full">
                <Avatar className="w-24 h-24 border-2 border-card">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex gap-8 text-center">
                <div>
                  <p className="text-xl font-bold">42</p>
                  <p className="text-sm text-muted-foreground">Posts</p>
                </div>
                <div>
                  <p className="text-xl font-bold">2.5K</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div>
                  <p className="text-xl font-bold">832</p>
                  <p className="text-sm text-muted-foreground">Following</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <p className="font-semibold">Sarah Johnson</p>
            <p className="text-sm text-foreground">
              Digital creator ✨<br />
              Capturing life's beautiful moments<br />
              📍 Los Angeles, CA
            </p>
            <a href="#" className="text-sm text-primary font-semibold hover:underline">
              sarah-creative.com
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button className="flex-1 gradient-teal hover:opacity-90 rounded-xl h-10 font-semibold">
              Edit Profile
            </Button>
            <Button variant="outline" className="flex-1 rounded-xl h-10">
              Share Profile
            </Button>
          </div>
        </div>

        {/* Posts Grid */}
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-4">
            <TabsTrigger value="posts" className="rounded-xl">
              <Grid className="h-5 w-5" />
            </TabsTrigger>
            <TabsTrigger value="saved" className="rounded-xl">
              <Bookmark className="h-5 w-5" />
            </TabsTrigger>
            <TabsTrigger value="tagged" className="rounded-xl">
              <UserCircle className="h-5 w-5" />
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="mt-0">
            <div className="grid grid-cols-3 gap-1">
              {profilePosts.map((post) => (
                <button
                  key={post.id}
                  className="aspect-square bg-muted rounded-lg overflow-hidden hover-scale"
                >
                  <img
                    src={post.image}
                    alt={`Post ${post.id}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved" className="mt-0">
            <div className="text-center py-20 space-y-2">
              <Bookmark className="h-16 w-16 mx-auto text-muted-foreground" />
              <p className="text-lg font-semibold">No saved posts yet</p>
              <p className="text-sm text-muted-foreground">
                Save posts you want to see again
              </p>
            </div>
          </TabsContent>

          <TabsContent value="tagged" className="mt-0">
            <div className="text-center py-20 space-y-2">
              <UserCircle className="h-16 w-16 mx-auto text-muted-foreground" />
              <p className="text-lg font-semibold">No tagged posts yet</p>
              <p className="text-sm text-muted-foreground">
                When people tag you, photos will appear here
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
