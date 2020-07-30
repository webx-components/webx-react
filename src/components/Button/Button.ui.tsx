import React, {FC} from "react";
import clsx from "clsx";


/**
 * component Props
 * @author Ingo Andelhofs
 */
export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  classes?: any,
}


/**
 * component ButtonUi
 * @author Ingo Andelhofs
 */
const ButtonUi: FC<IProps> = (p: IProps) => {
  const {classes, ...props} = p;

  const classNames = clsx(
    classes,
    "button",
  );

  return <button className={classNames} {...props} />;
};


export default ButtonUi;