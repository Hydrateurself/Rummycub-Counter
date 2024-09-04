type Props = {
  children: string;
  onClick: () => void;
  color: string;
  style: string;
  rotate: string;
  border: string;
  width: string;
};

export function Button({
  children,
  color,
  onClick,
  rotate,
  border,
  width,
}: Props) {
  const buttonStyle = {
    backgroundColor: color,
    rotate: rotate,
    border: border,
    width: width,
  };
  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      className="focus:outline-none text-slate-700 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-slate-400 w-40 shadow-lg"
    >
      {children}
    </button>
  );
}
