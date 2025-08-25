import sunny from "../assets/sunny.png";

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  type: string;
}

const Icon = ({ type, ...props }: IconProps) => {
  return <img src={sunny} alt={type} {...props} />;
};

export default Icon;
