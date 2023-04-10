import React from "react";

import { ErrorMessage } from "../../shared/style/ErrorMessage.style";

import { NotFoundPageWrapper } from "./NotFoundPage.style";

const NotFoundPage: React.FC = () => {
  return (
    <NotFoundPageWrapper>
      <ErrorMessage>Nothing was found</ErrorMessage>
    </NotFoundPageWrapper>
  );
};

export default NotFoundPage;
