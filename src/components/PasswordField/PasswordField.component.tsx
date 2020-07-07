import React, {Component, ReactNode} from 'react';
import theme from "./PasswordField.module.css";

/**
 * class PasswordField
 * @author Ingo Andelhofs
 */
export default class PasswordField extends Component {
  public render(): ReactNode {
    return <div className={theme.PasswordField}>
      <input className={theme.PasswordFieldInput} type="password" />
    </div>;
  }
}