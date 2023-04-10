import React from "react";

import { Container, Spinner } from "./Loader.style";

const Loader: React.FC = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default Loader;
