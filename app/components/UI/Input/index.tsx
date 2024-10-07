import { type ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  label?: string
}

export default function Input({ label, placeholder, id, ...props }: InputProps) {
  return (
    <label
      htmlFor={id}
      className="flex flex-col font-normal text-lg mb-4"
    >
      {label}
      <input
        {...props}
        id={id}
        placeholder={placeholder}
        className="bg-elements p-5 my-4 rounded-2xl outline-none placeholder:text-base placeholder:text-text/70"
      />
    </label>
  )
}