type Props = React.ComponentProps<"select"> & {
  legend?: string;
};

export function Select({ legend, children, ...rest }: Props) {
  return (
    <fieldset className="flex flex-1 max-h-20 text-gray-700 focus-within:text-gray-700">
      {legend && (
        <legend className="uppercase text-xxs mb-2 text-inherit">
          {legend}
        </legend>
      )}

      <select
        className="w-full h-12 rounded-lg border border-gray-300 px-4 
        text-sm text-gray-900 bg-transparent"
        value=""
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
