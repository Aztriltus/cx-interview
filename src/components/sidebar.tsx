"use client";

import { cn } from "@/utils/cn";
import { useCallback, useState } from "react";

export const Sidebar = ({ className }: { className?: string }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleSidebar = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  return (
    <div
      className={cn(
        "w-[460px] h-full bg-text-em-high grid place-content-center",
        "transition-all ease-in-out duration-300",
        isCollapsed && "w-14",
        className
      )}
    >
      <button
        className="text-on-primary h-full w-full font-semibold text-2xl tracking-tight flex items-center justify-center"
        onClick={handleToggleSidebar}
      >
        <span className="inline-block">S</span>
        <span
          className={cn(
            "inline-block w-[4.125rem] transition-all ease-in-out duration-300 overflow-hidden",
            isCollapsed && "w-0"
          )}
        >
          idebar
        </span>
      </button>
    </div>
  );
};
