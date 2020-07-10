import React, {Component, ReactNode} from 'react';

/**
 * class PureSlider
 * @author Ingo Andelhofs
 */
export default class PureSlider extends Component<any, any> {
  public render(): ReactNode {
    return <input type="range"/>;
  }
}