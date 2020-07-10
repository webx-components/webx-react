import React, {Component, ReactNode} from 'react';
import Button from "../components/Button/Button.component";
import PureCheckbox from "../components/Checkbox/PureCheckbox.component";
import Checkbox from "../components/Checkbox/Checkbox.component";
import Datepicker from "../components/Datepicker/Datepicker.component";
import Field from "../components/Field/Field.component";
import FileUpload from "../components/FileUpload/FileUpload.component";
import NumberField from "../components/NumberField/NumberField.component";
import NumberField2 from "../components/NumberField/NumberField2.component";
import PasswordField from "../components/PasswordField/PasswordField.component";
import ColorPicker from "../components/ColorPicker/ColorPicker.component";
import Radio from "../components/Radio/Radio.component";
import Slider from "../components/Slider/Slider.component";
import PureSlider from "../components/Slider/PureSlider.component";



/**
 * class BubbleTheme
 * @author Ingo Andelhofs
 */
export default class BubbleTheme extends Component {
  public render(): ReactNode {
    return <section>
      <h1><span>Webx React Forms</span> Bubble Theme</h1>

      {/* TODO: */}
      {/* Color Picker */}
      {/* Date + Time Picker */}
      {/* Image Button ??? */}
      {/* Month Picker */}
      {/* Reset Button ??? */}
      {/* Search ??? */}
      {/* Submit button !!! */}
      {/* Phone number */}
      {/* Time */}
      {/* Url */}
      {/* Week */}
      {/* Select */}
      {/* Area */}

      <h2>Button</h2>
      <Button>Click me</Button>

      <div style={{display: "none"}}>
        <h2><span>Pure CSS</span> Checkbox</h2>
        <PureCheckbox />
      </div>

      <h2><span>React</span> Checkbox</h2>
      <Checkbox />

      <div style={{display: "none"}}>
        <h2>Color Picker</h2>
        <Field type="color" />
      </div>

      <h2><span>React</span> Color Picker</h2>
      <ColorPicker />

      <h2><span>React</span> Datepicker</h2>
      <Datepicker />

      <h2>Email Field</h2>
      <Field
        type="email"
        placeholder="jhon.doe@example.com"
      />

      <h2><span>React</span> File upload</h2>
      <FileUpload />

      {/* Todo: Make + and - svg's */}
      <h2><span>Mode 1</span> Number Field</h2>
      <NumberField />

      {/* Todo: Make + and - svg's */}
      <h2><span>Mode 2</span> Number Field</h2>
      <NumberField2 />

      <h2>Password Field</h2>
      <PasswordField />

      <h2><span>React</span> Radio button</h2>
      <Radio />

      <h2><span>React</span> Range slider</h2>
      <Slider />

      <h2><span>Pure</span> Range slider</h2>
      <PureSlider/>

      <h2><span>React</span> Selection Field</h2>
      <Field />

      <h2><span>React</span> Text Area</h2>
      <Field />




      <div style={{height: "40vh"}}/>
    </section>;
  }
}