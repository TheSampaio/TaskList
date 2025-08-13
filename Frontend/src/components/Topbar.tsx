type TopbarProps = {
  text?: string;
};

export default function Topbar({ text = "Topbar" }: TopbarProps) {
  return (
    <nav className="flex w-full p-5 bg-[#ececec]">
      <h1>{text}</h1>
    </nav>
  );
}
