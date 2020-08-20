import React, {FC} from "react";
import clsx from "clsx";
import Icon from "../Icon/Icon";


/**
 * CheckboxUi Props
 * @author Ingo Andelhofs
 */
interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: any,
  active: boolean
}


/**
 * component CheckboxUi
 * @author Ingo Andelhofs
 */
const CheckboxUi: FC<IProps> = (p: IProps) => {
  const {active, classes, className, ...props} = p;

  const classNames = clsx(
    className,
    classes,
    "react-checkbox",
    {
      "react-checkbox--active": active,
    }
  );

  return <div className={classNames} {...props}>
    <div className={`react-checkbox__inner-box`}>
      <Icon code="fas fa-check" className="react-checkbox__icon" alt="Check Icon" />
    </div>
  </div>;
};

export default CheckboxUi;