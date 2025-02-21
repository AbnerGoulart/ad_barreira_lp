type Props = React.ComponentProps<"input"> & {
  legend?: string
}

export function Input({ legend, type="text", ...rest}: Props){
  return (
    <fieldset className="flex flex-1 max-h-20 text-gray-700 focus-within:text-gray-700">
      {legend && (
        <legend className="uppercase text-xxs mb-2 text-inherit">
          {legend}
        </legend>
      )}

      <input
        type="text"
        className="w-full h-12 rounded-lg border border-gray-300 px-4 text-sm text-gray-900 bg-transparent"
        {...rest} 
      />
    </fieldset>
  )
}