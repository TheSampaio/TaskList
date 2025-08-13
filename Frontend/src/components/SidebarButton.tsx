type SidebarButtonProps = {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  active?: boolean;
};

export default function SidebarButton({
  icon,
  text,
  onClick,
  active = false,
}: SidebarButtonProps) {
  return (
    <button
      className={`flex gap-4 rounded-md w-full p-4 cursor-pointer transition-colors duration-300
        ${active ? "bg-[#2d4070]" : "bg-[#17193a] hover:bg-[#2d4070]"} 
        text-white`}
      onClick={onClick}
      type="button"
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}
