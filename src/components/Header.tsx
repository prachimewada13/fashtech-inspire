import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingBag, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { to: "/", label: "Home", end: true },
  { to: "/shop", label: "Shop" },
  { to: "/boards", label: "Boards" },
  { to: "/outfits", label: "Outfits" },
];

const navLinkClass =
  "relative text-sm uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-foreground";
const navLinkActive =
  "text-foreground after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:bg-accent";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="font-display text-2xl font-bold tracking-tight">
          fash<span className="text-accent">tech</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {tabs.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              end={t.end}
              className={navLinkClass}
              activeClassName={navLinkActive}
            >
              {t.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Cart" asChild>
            <Link to="/cart">
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" aria-label="Profile" asChild>
            <Link to="/profile">
              <User className="h-5 w-5" />
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="mt-10 flex flex-col gap-6">
                {tabs.map((t) => (
                  <NavLink
                    key={t.to}
                    to={t.to}
                    end={t.end}
                    onClick={() => setOpen(false)}
                    className={cn(navLinkClass, "text-base")}
                    activeClassName="text-foreground"
                  >
                    {t.label}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
