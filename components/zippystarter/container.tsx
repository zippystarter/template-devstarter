import * as React from "react";
import { cn } from "@/lib/utils";

export function ContainerInner({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
}

export function ContainerOuter({
  children,
  className,
  component: Component = "div",
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  component?: React.ElementType;
}) {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  className?: string;
  component?: React.ElementType;
  wrapperClassName?: string;
}

export function Container({
  className,
  component = "div",
  children,
  wrapperClassName,
  ...props
}: ContainerProps) {
  return (
    <ContainerOuter
      component={component}
      className={wrapperClassName}
      {...props}
    >
      <ContainerInner className={cn(className, "px-safe")}>
        {children}
      </ContainerInner>
    </ContainerOuter>
  );
}
