type Props = {
  children: string;
  onClick: () => void;
  color: string;
  style: string;
  rotate: string;
};

export function Button({ children, color, onClick, rotate }: Props) {
  const buttonStyle = {
    backgroundColor: color,
    rotate: rotate,
  };
  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      className="pl-6 pr-6 pt-2 pb-2 rounded-full border-2 border-red-300 font-archivo font-bold"
    >
      {children}
    </button>
  );
}
