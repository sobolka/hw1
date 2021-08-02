export const Button = ({
  title = "0",
  handleClick = () => {},
  className = "",
}) => (
  <button className={className} onClick={handleClick}>
    {title}
  </button>
);
