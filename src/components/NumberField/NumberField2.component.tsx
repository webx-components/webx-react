import React, {Component, ReactNode} from 'react';
import theme from "./NumberField2.module.css";

/**
 * class NumberField2Component
 * @author Ingo Andelhofs
 */
export default class NumberField2Component extends Component {
  public render(): ReactNode {
    return <div className={theme.NumberField}>
      <input className={theme.NumberFieldInput} type="number" />

      <div className={theme.Buttons}>
        <button className={theme.UpButton + " " + theme.Button}>+</button>
        <button className={theme.DownButton + " " + theme.Button}>-</button>
      </div>
    </div>;
  }
}