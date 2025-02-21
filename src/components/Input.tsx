type Props = React.ComponentProps<"input"> & {
  legend?: string;
};

export function Input({ legend, type = "text", ...rest }: Props) {
  return (
    <fieldset className="flex flex-col items-start w-full text-gray-700 focus-within:text-gray-700">
      {legend && (
        <label className="uppercase text-xxs mb-1 text-inherit">
          {legend}
        </label>
      )}

      <input
        type={type}
        className="w-full h-12 rounded-lg border border-gray-300 px-4 text-sm text-gray-900 bg-transparent"
        {...rest}
      />
    </fieldset>
  );
}
