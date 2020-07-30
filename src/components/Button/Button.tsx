import React, {FC} from 'react';
import ButtonUi, {IProps} from "./Button.ui";


/**
 * component Button
 * @author Ingo Andelhofs
 */
const Button: FC<IProps> = (props: IProps) => {
  return <ButtonUi {...props}/>
}


export default Button;