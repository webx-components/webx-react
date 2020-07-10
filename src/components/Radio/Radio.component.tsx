import React, {Component, ReactNode} from 'react';
import theme from "./Radio.module.css";


/**
 * class Radio
 * @author Ingo Andelhofs
 */
export default class Radio extends Component {
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
      <div className={theme.CheckboxInnerContainer} />
    </div>;
  }
}