import { ChevronRight, User, Lock, Bell, Moon, HelpCircle, LogOut, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

const settingsSections = [
  {
    title: "Account",
    items: [
      { icon: User, label: "Edit Profile", href: "#" },
      { icon: Lock, label: "Privacy & Security", href: "#" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: Bell, label: "Notifications", href: "#" },
      { icon: Moon, label: "Dark Mode", href: "#", hasToggle: true },
    ],
  },
  {
    title: "Support",
    items: [
      { icon: HelpCircle, label: "Help & Support", href: "#" },
    ],
  },
];

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-xl border-b border-border px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold">Settings</h1>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Profile Card */}
        <Card className="p-6 rounded-3xl shadow-soft border-0">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-semibold text-lg">Sarah Johnson</p>
              <p className="text-sm text-muted-foreground">@sarah_creative</p>
            </div>
          </div>
        </Card>

        {/* Settings Sections */}
        {settingsSections.map((section, idx) => (
          <div key={idx} className="space-y-2">
            <h2 className="text-sm font-semibold text-muted-foreground px-2">
              {section.title}
            </h2>
            <Card className="rounded-3xl shadow-soft border-0 overflow-hidden">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx}>
                  <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-smooth">
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </button>
                  {itemIdx < section.items.length - 1 && (
                    <Separator className="mx-6" />
                  )}
                </div>
              ))}
            </Card>
          </div>
        ))}

        {/* Logout Button */}
        <Button
          variant="destructive"
          className="w-full h-12 rounded-xl font-semibold"
          onClick={() => navigate("/")}
        >
          <LogOut className="mr-2 h-5 w-5" />
          Log Out
        </Button>

        {/* Version */}
        <p className="text-center text-sm text-muted-foreground">
          Vivid v1.0.0
        </p>
      </div>
    </div>
  );
};

export default Settings;
