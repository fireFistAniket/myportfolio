import { lazy, Suspense } from "react";

const Globe = lazy(() => import("./Globe"));

export const GlobeCard = () => {
  return (
    <div className="h-60 md:h-60 w-full flex items-center justify-center relative bg-transparent mt-10">
      <Suspense fallback={<p>loading</p>}>
        <Globe className="absolute -right-0 -bottom-80 md:-bottom-72" />
      </Suspense>
    </div>
  );
};
