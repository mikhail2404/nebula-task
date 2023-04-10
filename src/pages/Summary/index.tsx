import { lazy, Suspense } from "react";

import Loader from "../../shared/components/Loader/Loader";

const SummaryComponent = lazy(() => import("./Summary"));

const Summary = () => {
  return (
    <Suspense fallback={<Loader />}>
      <SummaryComponent />
    </Suspense>
  );
};

export default Summary;
