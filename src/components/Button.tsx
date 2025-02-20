type ButtonProps = {
  title: string;
};

export function Button({ title }: ButtonProps) {
  return (
    <button
      className="bg-neutral-100 rounded-4xl mb-5 p-3 border 
     border-gray-300 shadow-md hover:scale-105 hover:drop-shadow-xl 
      transition-all duration-200"
    >
      {title}
    </button>
  );
}
