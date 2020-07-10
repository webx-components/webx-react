import React, {Component, ReactNode} from 'react';
import theme from "./ColorPicker.module.css";

/**
 * class ColorPicker
 * @author Ingo Andelhofs
 */
export default class ColorPicker extends Component<any, any> {
  public inputRef = React.createRef<HTMLInputElement>();

  public state = {
    open: false,
  };


  public onToggleOpen = () => {
    this.inputRef.current!.click();

    this.setState({open: !this.state.open});
  }


  public render(): ReactNode {
    return <div className={theme.ColorPicker}>
      <div onClick={this.onToggleOpen} className={theme.ColorBox}/>
      <input ref={this.inputRef} className={theme.Hidden} type="color"/>
    </div>;
  }
}