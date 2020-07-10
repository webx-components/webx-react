import React, {Component, ReactNode} from 'react';
import Field from "../Field/Field.component";
import theme from "./SelectField.module.css";
import downSvg from "./svg/down-drop.svg";


/**
 * class SelectField
 * @author Ingo Andelhofs
 */
export default class SelectField<P> extends Component<P & any, any> {
  public render(): ReactNode {
    return <div className={theme.SelectField}>
      <Field type={"text"} name={"select"} rightIconSrc={downSvg} />
      <div>

      </div>
    </div>;
  }
}