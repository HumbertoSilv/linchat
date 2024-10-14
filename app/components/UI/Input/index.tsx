import { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type InputPrefixProps = ComponentProps<'div'>
type InputControlProps = ComponentProps<'input'>
type InputRootProps = ComponentProps<'div'>


export function Prefix(props: InputPrefixProps) {
  return <div {...props} />
}


export function Control(props: InputControlProps) {
  return (
    <input
      className="flex-1 p-3 bg-transparent placeholder:text-text/70 outline-none"
      {...props}
    />
  )
}


export function Root({ className, ...props }: InputRootProps) {
  return (
    <div
      className={twMerge(
        "flex w-full items-center gap-2 px-4 py-2 shadow-sm bg-elements my-4 rounded-2xl",
        className)}
      {...props}
    />
  )
}
