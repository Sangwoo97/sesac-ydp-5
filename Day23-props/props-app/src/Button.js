import './Button.css';

const Button = ({ link, children }) => {
  return (
    <a href={link}>
      <button className="Button">{children}</button>
    </a>
  );
};

export default Button;
