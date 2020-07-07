import React, {FunctionComponent, useState} from 'react';
import defaultTheme from "./input.module.scss";



/**
 * Input Props
 * @author Ingo Andelhofs
 */
type InputProps = {
  name?: string,
  label?: string,
  type?: string,
  placeholder?: string,
  defaultValue?: string,

  theme?: any,
  className?: string | string[],
}


/**
 * Input component
 * @author Ingo Andelhofs
 * @param props The props for the Input component
 */
export const Input: FunctionComponent<InputProps> = (props: InputProps) => {
  // State hooks
  const [hasError] = useState(false);
  const [errorMessage] = useState("");


  // Props
  const theme = props.theme ?? defaultTheme;


  // Render
  return <div className={theme.InputContainer}>
    <label
      children={props.label} />

    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      onChange={() => { /* Check for errors... */ }} />

    <label
      className={theme.Error}
      children={hasError ? errorMessage : null} />
  </div>;
}