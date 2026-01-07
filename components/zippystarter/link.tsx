import React, { forwardRef } from "react";

export type LinkProps = React.ComponentPropsWithoutRef<"a">;

export const Link = forwardRef(function Link(
  props: LinkProps,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return <a {...props} ref={ref} />;
});
