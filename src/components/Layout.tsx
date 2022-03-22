import { GitHubUser } from "@lib/types";
import { Navigaiton } from "./Navigation";
import { Sidebar } from "./Sidebar";

export interface LayoutProps {
  user: GitHubUser;
  children: React.ReactNode;
}

export function Layout({ children, user }: LayoutProps) {
  return (
    <div className="w-full min-h-screen bg-[#22272e] pt-6">
      <Navigaiton />
      <div className="xl:container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <Sidebar user={user} />
          <div className="w-full md:w-3/4">{children}</div>
        </div>
      </div>
    </div>
  );
}
