import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bell } from "lucide-react";

interface HeaderProps {
  title: string;
  description?: string;
  userEmail?: string;
  userPlan?: string | null;
}

export function Header({ title, description, userEmail, userPlan }: HeaderProps) {
  const initials = userEmail
    ? userEmail.slice(0, 2).toUpperCase()
    : "??";

  return (
    <header className="flex h-16 items-center justify-between border-b border-border px-6">
      <div>
        <h1 className="font-semibold text-lg">{title}</h1>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>

      <div className="flex items-center gap-4">
        <button className="relative rounded-lg p-2 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary" />
        </button>

        <div className="flex items-center gap-3">
          {userPlan && (
            <Badge variant="secondary" className="text-xs capitalize">
              {userPlan}
            </Badge>
          )}
          <Avatar className="h-8 w-8">
            <AvatarImage src="" />
            <AvatarFallback className="text-xs bg-primary/10 text-primary font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
