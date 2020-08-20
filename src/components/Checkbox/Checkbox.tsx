import React, {Component, ReactNode} from 'react';
import CheckboxUi from "./Checkbox.ui";



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
    return <CheckboxUi onClick={this.onToggle} active={this.state.active}/>;
  }
}