export const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-neutral-800">{title}</h2>
      <div className="h-1 w-20 bg-red-800 mx-auto mt-4 rounded-full" />
    </div>
  );
};
