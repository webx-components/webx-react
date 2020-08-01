import React, {FC} from "react";
import clsx from "clsx";


/**
 * Icon Props
 * @author Ingo Andelhofs
 */
interface IProps extends React.HTMLAttributes<any> {
  src?: string,
  code?: string,
  invert?: boolean,
  size?: "small" | "medium" | "large",
  alt?: string,
  classes?: string,
}


/**
 * component Icon
 * @author Ingo Andelhofs
 */
const Icon: FC<IProps> = (p: IProps) => {
  const {src, code, invert, size, alt, classes, className, ...props} = p;

  const classNames = clsx(
    className,
    classes,
    code,
    "icon",
    `icon--${size ?? "medium"}`,
    {
      "icon--invert": invert,
    }
  );

  if (src) {
    return <img className={classNames} src={src} alt={alt} {...props}/>
  }
  else {
    return <i className={classNames} role="img" aria-label={alt} {...props}/>;

  }
};

export default Icon;