import React, {Component, ReactNode} from 'react';
import theme from "./NumberField.module.css";


/**
 * class NumberField
 * @author Ingo Andelhofs
 */
export default class NumberField extends Component {
  public render(): ReactNode {
    return <div className={theme.NumberField}>
      <button className={theme.LeftButton + " " + theme.Button}>-</button>
      <input className={theme.NumberFieldInput} type="number" />
      <button className={theme.RightButton + " " + theme.Button}>+</button>
    </div>;
  }
}