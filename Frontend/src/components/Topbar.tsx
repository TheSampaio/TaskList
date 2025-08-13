type TopbarProps = {
  text?: string;
};

export default function Topbar({ text = "Topbar" }: TopbarProps) {
  return (
    <nav className="flex w-full p-5 bg-white border-b border-b-[#ccc]">
      <h1 className="text-2xl">{text}</h1>
    </nav>
  );
}
