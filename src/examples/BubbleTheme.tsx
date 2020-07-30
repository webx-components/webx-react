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
import SelectField from "../components/SelectField/SelectField.component";
import Textarea from "../components/Textarea/Textarea.component";



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

      <h2><span>React</span> Range slider (Unstable)</h2>
      <Slider />

      <div style={{display: "none"}}>
        <h2><span>Pure</span> Range slider</h2>
        <PureSlider/>
      </div>

      <h2><span>React</span> Selection Field (Unstable)</h2>
      <SelectField />

      <h2><span>React</span> Text Area</h2>
      <Textarea placeholder="Type here ..." />


      <div style={{height: "20vh"}}/>
      <h1><span>Extra field types</span> Bubble Theme</h1>
      <h2>Time picker</h2>
      <Field type={"time"} placeholder={"Enter a time"} />

      <h2>Week</h2>
      <Field type={"week"} placeholder={"Enter a weekday"} />

      <h2>Month Field</h2>
      <Field type={"month"} placeholder={"Enter a month"} />

      <h2>Date picker</h2>
      <Field type={"date"} placeholder={"Enter a date"} />

      <h2>Date + Time picker</h2>
      <Field type={"datetime-local"} placeholder={"Enter a local date"} />

      <h2>Email Field</h2>
      <Field type={"email"} placeholder={"Enter an email"} />

      <h2>Number Field</h2>
      <Field type={"number"} placeholder={"Enter a number"} />

      <h2>Password Field</h2>
      <Field type={"password"} placeholder={"Enter password"} />

      <h2>Search Field</h2>
      <Field type={"search"} placeholder={"Enter a search term"} />

      <h2>Telephone Field</h2>
      <Field type={"tel"} placeholder={"Enter a phone-number"} />

      <h2>Text Field</h2>
      <Field type={"text"} placeholder={"Enter some text"} />

      <h2>Url Field</h2>
      <Field type={"url"} placeholder={"Enter a url"} />

      <h2>Image Button</h2>
      <Field type={"image"} src={"https://via.placeholder.com/60x40"}  />

      <h2>Reset Button</h2>
      <Field type={"reset"} />

      <h2>Submit Button</h2>
      <Field type={"submit"} />

      <div style={{height: "40vh"}}/>
    </section>;
  }
}