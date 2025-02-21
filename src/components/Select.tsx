type Props = React.ComponentProps<"select"> & {
  legend?: string;
};

export function Select({ legend, children, ...rest }: Props) {
  return (
    <fieldset className="flex flex-col items-start w-full text-gray-700 focus-within:text-gray-700">
      {legend && (
        <label className="uppercase text-xxs mb-1 text-inherit">
          {legend}
        </label>
      )}

      <select
        className="w-full h-12 rounded-lg border border-gray-300 px-4 
        text-sm text-gray-900 bg-transparent cursor-pointer"
        {...rest}
      >
        <option value="" disabled hidden>
          Selecione
        </option>
        {children}
      </select>
    </fieldset>
  );
}
