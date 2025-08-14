type CheckboxProps = {
  value?: boolean;
  onClick?: () => void;
};

export default function Checkbox({ value, onClick }: CheckboxProps) {
  return (
    <div
      className={`inline-block align-middle size-4 border rounded-full cursor-pointer ${
        value ? "bg-[#2d4070]" : "bg-white"
      }`}
      onClick={onClick}
    />
  );
}
