interface ButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  label: string;
  onClick: () => void;
}

export const Button = ({ type = "button", label, onClick }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick}>
      {label}
    </button>
  );
};
