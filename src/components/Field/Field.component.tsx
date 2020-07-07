import React, {Component, ReactNode} from 'react';
import theme from "./Field.module.css"

/**
 * class Field
 * @author Ingo Andelhofs
 */
export default class Field extends Component<any, any> {
  public render(): ReactNode {
    return <input className={theme.Field} {...this.props}/>;
  }
}