import React, {Component, ReactNode} from 'react';
import Field from "../Field/Field.component";
import eyeSvg from "./svg/eye.svg";
import eyeSlashSvg from "./svg/eye-slash.svg";


/**
 * class PasswordField
 * @author Ingo Andelhofs
 */
export default class PasswordField extends Component {
  public state = {
    hidden: true,
  };

  public onChangeVisibility = () => {
    this.setState({hidden: !this.state.hidden});
  }

  public render(): ReactNode {
    const {hidden} = this.state;

    return <Field
      type={hidden ? "password" : "text"}
      placeholder="Password"
      rightIconSrc={hidden ? eyeSvg : eyeSlashSvg}
      onRightIconClick={this.onChangeVisibility} />;
  }
}