import { cn } from "@/utils/cn";

export const HeaderMobile = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-14 px-4 bg-text-em-high font-medium text-xl text-on-primary grid place-content-center",
        className
      )}
    >
      Header
    </div>
  );
};
