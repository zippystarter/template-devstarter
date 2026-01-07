import React, { forwardRef } from "react";

export type ImageProps = React.ComponentPropsWithoutRef<"img">;

export const Image = forwardRef(function Image(
  props: ImageProps,
  ref: React.ForwardedRef<HTMLImageElement>
) {
  return <img {...props} ref={ref} />;
});
