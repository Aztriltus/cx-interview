import { HeaderMobile } from "./header-mobile";
import { Sidebar } from "./sidebar";

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex md:flex-row flex-col">
      <HeaderMobile className="md:hidden shrink-0" />
      <Sidebar className="hidden md:grid shrink-0" />
      <div className="h-full w-full flex-1 min-w-0 bg-background overflow-y-auto">
        {children}
      </div>
    </div>
  );
};
