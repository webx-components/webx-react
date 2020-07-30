import React, {FC} from "react";
import clsx from "clsx";


/**
 * ButtonUi Props
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
  const {onMouseMove, classes, children, ...props} = p;

  const classNames = clsx(
    classes,
    "button",
  );

  const onMouseMoveHandler = (event: any) => {
    if (onMouseMove) {
      onMouseMove(event);
    }

    const {target, pageX, pageY} = event;

    const x = pageX - target.offsetLeft;
    const y = pageY - target.offsetTop;

    target.style.setProperty('--button-spotlight-x', `${ x }px`);
    target.style.setProperty('--button-spotlight-y', `${ y }px`);
  }

  return <button
    className={classNames}
    onMouseMove={onMouseMoveHandler}
    children={<span className="button__container">{children}</span>}
    {...props}
  />;
};


export default ButtonUi;