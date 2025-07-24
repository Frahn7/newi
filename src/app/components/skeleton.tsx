import { Skeleton } from "@/components/ui/skeleton";

export const HomeSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-[200px] h-[200px] rounded-sm bg-gray-300" />
    </div>
  );
};
