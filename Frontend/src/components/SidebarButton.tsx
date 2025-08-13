type SidebarButtonProps = {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
};

export default function SidebarButton({
  icon,
  text,
  onClick,
}: SidebarButtonProps) {
  return (
    <button
      className="flex gap-4 bg-[#17193a] text-white rounded-md w-full p-4 cursor-pointer hover:bg-[#2d4070] transition-colors duration-300"
      onClick={onClick}
      type="button"
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}
