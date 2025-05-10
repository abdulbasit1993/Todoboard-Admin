import React from "react";
import ProtectedLayout from "./ProtectedLayout";

export default function withProtectedLayout(PageComponent) {
  return function WrappedComponent(props) {
    return (
      <ProtectedLayout>
        <PageComponent {...props} />
      </ProtectedLayout>
    );
  };
}
