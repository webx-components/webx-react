import React, {Component, ReactNode} from 'react';
import theme from "./Button.module.css";


/**
 * class Button
 * @author Ingo Andelhofs
 */
export default class Button<P, S> extends Component<P & any, S & any> {
  public render(): ReactNode {
    const {children} = this.props;

    return <button className={theme.Button}>{children}</button>;
  }
}