import React, {Component, ReactNode} from 'react';
import theme from "./Textarea.module.css";


/**
 * class Textarea
 * @author Ingo Andelhofs
 */
export default class Textarea<P> extends Component<P & any, any> {
  public render(): ReactNode {
    const {...props} = this.props;
    return <textarea className={theme.Textarea} {...props} />;
  }
}