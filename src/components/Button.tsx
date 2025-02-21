type ButtonProps = {
  title: string;
  theme?: "light" | "dark";
};

export function Button({ title, theme = "light" }: ButtonProps) {
  return (
    <button
      className={`${
        theme === "dark"
          ? "bg-neutral-800 text-neutral-100 border-gray-600"
          : "bg-neutral-100 text-neutral-800 border-gray-300"
      } rounded-4xl mb-5 p-3 hover:scale-105 hover:drop-shadow-xl transition-all duration-200 cursor-pointer font-geist`}
    >
      {title}
    </button>
  );
}
