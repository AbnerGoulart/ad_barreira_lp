type Props = React.ComponentProps<"textarea"> & {
  legend?: string;
};

export function TextArea({ legend, ...rest }: Props) {
  return (
    <fieldset className="flex flex-col items-start w-full text-gray-700 focus-within:text-gray-700">
      {legend && (
        <label className="uppercase text-xxs mb-1 text-inherit">{legend}</label>
      )}

      <textarea
        className="w-full h-32 rounded-lg border border-gray-300 px-4 py-2 
        text-sm text-gray-900 bg-transparent resize-none"
        {...rest}
      />
    </fieldset>
  );
}
