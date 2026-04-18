import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogOut, Mail, User as UserIcon, Lock } from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
  // Force the deep red dark theme on this page only.
  useEffect(() => {
    const root = document.documentElement;
    const had = root.classList.contains("dark");
    root.classList.add("dark");
    return () => {
      if (!had) root.classList.remove("dark");
    };
  }, []);

  const [username, setUsername] = useState("noir.streetwear");
  const [email, setEmail] = useState("noir@fashtech.app");
  const [password, setPassword] = useState("••••••••");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile updated");
  };

  const handleLogout = () => {
    toast("Logged out", { description: "See you soon." });
  };

  const initials = username.slice(0, 2).toUpperCase();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container max-w-2xl py-10">
        {/* Header card */}
        <section className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[0_20px_60px_-20px_hsl(0_96%_53%/0.35)]">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-60 blur-3xl"
            style={{ background: "hsl(var(--primary) / 0.45)" }}
          />
          <div className="relative flex items-center gap-5">
            <Avatar className="h-20 w-20 border-2 border-primary/60 ring-2 ring-accent/40">
              <AvatarFallback className="bg-secondary text-xl font-semibold text-secondary-foreground">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <h1 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                {username}
              </h1>
              <p className="mt-1 truncate text-sm text-muted-foreground">{email}</p>
            </div>
          </div>
        </section>

        {/* Form */}
        <form onSubmit={handleSave} className="mt-8 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Username
            </Label>
            <div className="relative">
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 border-border bg-card pl-10 text-foreground"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Email
            </Label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-border bg-card pl-10 text-foreground"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Password
            </Label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 border-border bg-card pl-10 text-foreground"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="h-12 w-full bg-primary text-primary-foreground hover:bg-accent"
          >
            Save changes
          </Button>
        </form>

        {/* Logout */}
        <div className="mt-10 border-t border-border pt-6">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="h-12 w-full border-destructive bg-transparent text-destructive hover:bg-destructive hover:text-destructive-foreground"
          >
            <LogOut className="h-4 w-4" />
            Log out
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Profile;
