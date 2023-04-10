import { lazy, Suspense } from "react";

import Loader from "../../shared/components/Loader/Loader";

const EmailComponent = lazy(() => import("./Email"));

const Email = () => {
  return (
    <Suspense fallback={<Loader />}>
      <EmailComponent />
    </Suspense>
  );
};

export default Email;
