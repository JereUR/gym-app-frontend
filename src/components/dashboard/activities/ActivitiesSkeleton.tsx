import { Skeleton } from '@/components/ui/skeleton'

const ActivitiesSkeleton = (props: any) => (
  <div className="flex flex-col gap-10 m-10">
    <div className="flex justify-between mx-10">
      <Skeleton className="h-48 w-[22vw] rounded-md" />
      <Skeleton className="h-32 w-64 rounded-md mr-10" />
    </div>
    <div className="flex justify-between mx-10">
      <div className="flex gap-4">
        <Skeleton className="h-[4vh] w-64 rounded-md" />
        <Skeleton className="h-[3vh] w-40 rounded-md" />
      </div>
      <div>
        <Skeleton className="h-[4vh] w-40 rounded-md" />
      </div>
    </div>
    <div className="flex flex-col justify-center pt-[6vh] mx-10 border">
      <Skeleton className="h-[6vh] w-full mt-1 rounded-none" />
      <Skeleton className="h-[6vh] w-full mt-1 rounded-none" />
      <Skeleton className="h-[6vh] w-full mt-1 rounded-none" />
      <Skeleton className="h-[6vh] w-full mt-1 rounded-none" />
      <Skeleton className="h-[6vh] w-full mt-1 rounded-none" />
    </div>
    <div className="flex justify-between mx-10 -mt-5">
      <Skeleton className="h-[3vh] w-20 rounded-md" />
      <Skeleton className="h-[3vh] w-20 rounded-md" />
    </div>
  </div>
)

export default ActivitiesSkeleton