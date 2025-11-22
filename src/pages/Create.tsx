import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";

const Create = () => {
  return (
    <div className="min-h-screen pb-20 bg-gradient-to-b from-background to-background/95">
      <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-xl border-b border-border px-4 py-3">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-xl font-semibold">Create Post</h1>
        </div>
      </header>
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
        <Upload className="h-24 w-24 mx-auto text-muted-foreground" />
        <div className="space-y-2">
          <p className="text-lg font-semibold">Create a new post</p>
          <p className="text-sm text-muted-foreground">Select photos or videos to share</p>
        </div>
        <Button className="gradient-teal hover:opacity-90 rounded-xl h-12 px-8 font-semibold">
          Select from Gallery
        </Button>
      </div>
      <BottomNav />
    </div>
  );
};

export default Create;
