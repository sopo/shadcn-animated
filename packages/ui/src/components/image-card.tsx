import * as React from "react"
import { cn } from "cn"

function Card({
  className,
  children,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & {
  size?: "default" | "sm"
}) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card group relative flex w-full cursor-pointer flex-col",
        "gap-(--card-spacing)",
        "rounded-xl",
        "py-(--card-spacing)",
        "text-sm text-card-foreground",
        "[--card-spacing:--spacing(4)]",
        "overflow-visible",
        "data-[size=sm]:[--card-spacing:--spacing(3)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

type ImageWrapperProps = {
  children: React.ReactNode
  className?: string
}

function ImageArea({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative grid w-full overflow-visible",
        className
      )}
    >
      {children}
    </div>
  )
}

function BackImage({
  children,
  className,
}: ImageWrapperProps) {
  return (
    <div
      className={cn(
        "col-start-1 row-start-1",
        "w-full self-start",
        "-rotate-2",
        "transition-transform duration-300 ease-out",
        "group-hover:-translate-x-8",
        "group-hover:-rotate-6",
        className
      )}
    >
      {children}
    </div>
  )
}

function FrontImage({
  children,
  className,
}: ImageWrapperProps) {
  return (
    <div
      className={cn(
        "col-start-1 row-start-1",
        "w-full self-start",
        "rotate-2",
        "transition-transform duration-300 ease-out",
        "group-hover:translate-x-8",
        "group-hover:rotate-6",
        className
      )}
    >
      {children}
    </div>
  )
}

function CardHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid",
        "auto-rows-min items-start gap-1",
        "rounded-t-xl px-(--card-spacing)",
        "has-data-[slot=card-action]:grid-cols-[1fr_auto]",
        "has-data-[slot=card-description]:grid-rows-[auto_auto]",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "cn-font-heading text-base leading-snug font-medium",
        "group-data-[size=sm]/card:text-sm",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function CardAction({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1",
        "self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "p-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

function CardFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center p-(--card-spacing)",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  ImageArea,
  FrontImage,
  BackImage,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
