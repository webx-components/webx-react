import React, {Component, ReactNode} from 'react';
import theme from "./Field.module.css"
import c from "classnames";


/**
 * class Field
 * @author Ingo Andelhofs
 */
export default class Field extends Component<any, any> {
  public inputRef = React.createRef<HTMLInputElement>();
  public state = {
    lastPass: false,
  };


  public componentDidMount() {
    // Detect LastPass or other password managers
    const inputElement = this.inputRef.current!;

    let observer = new MutationObserver((mutations: MutationRecord[]) => {
      if (inputElement.style.backgroundImage)
        this.setState({lastPass: true});
    });

    observer.observe(inputElement, { attributes : true, attributeFilter : ['style'] });
  }


  /**
   * Render the field component
   */
  public render(): ReactNode {
    const { className, leftIconSrc, rightIconSrc, onLeftIconClick, onRightIconClick, ...props } = this.props;

    return <div className={theme.Field}>
      {leftIconSrc ? <img
        className={theme.LeftIcon + " " + theme.Icon}
        src={leftIconSrc}
        alt="Left Icon"
        onClick={onLeftIconClick}/> : null }

      {rightIconSrc ? <img
        className={theme.RightIcon + " " + theme.Icon + " " + (this.state.lastPass ? theme.LastPass : null)}
        src={rightIconSrc}
        alt="Right Icon"
        onClick={onRightIconClick}/> : null }

      <input
        ref={this.inputRef}
        className={c(theme.FieldInput, className)}
        {...props} />
    </div>;
  }
}