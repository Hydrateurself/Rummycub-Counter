type Props = {
  children: string;
  onClick: () => void;
  color: string;
  style: string;
};

export function Button({ children, color, onClick }: Props) {
  const buttonStyle = {
    backgroundColor: color,
  };
  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}
