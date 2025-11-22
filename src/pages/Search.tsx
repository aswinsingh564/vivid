import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import BottomNav from "@/components/BottomNav";

const Search = () => {
  return (
    <div className="min-h-screen pb-20 bg-gradient-to-b from-background to-background/95">
      <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-xl border-b border-border px-4 py-3">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10 h-12 rounded-xl"
            />
          </div>
        </div>
      </header>
      <div className="max-w-2xl mx-auto px-4 py-8 text-center">
        <p className="text-muted-foreground">Start searching for users and posts</p>
      </div>
      <BottomNav />
    </div>
  );
};

export default Search;
