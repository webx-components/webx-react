import React, {Component, ReactNode} from 'react';
import theme from "./Checkbox.module.css";
import checkSvg from "./svg/check.svg";

/**
 * class Checkbox
 * @author Ingo Andelhofs
 */
export default class Checkbox extends Component {
  public state: any = {
    active: false,
  }

  public onToggle = () => {
    this.setState({
      active: !this.state.active,
    });
  }

  public render(): ReactNode {
    return <div
      onClick={this.onToggle}
      className={theme.CheckboxOuterContainer + " " + (this.state.active ? theme.Active : "")}>
      <div className={theme.CheckboxInnerContainer}>
        <img
          alt="Check Icon"
          className={theme.CheckboxSvg}
          src={checkSvg} />
      </div>
    </div>;
  }
}