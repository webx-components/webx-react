import React from "react";
import "./styles/global.scss";
import {Input} from "./components/input/input.component";


function App() {
  return <div>
    <h1><span>WebX</span> Forms</h1>

    <h2>Button</h2>
    <Input
      type={"button"}
      defaultValue={"Hello"} />

    <h2>Checkbox</h2>
    <Input
      type={"checkbox"}
      label={"Vink de checkbox aan"} />

    <h2>Color Picker</h2>
    <Input
      type={"color"}
      label={"Geef hier een kleur in: "} />

    <h2>Date Picker</h2>
    <Input
      type={"date"}
      label={"Geef hier een datum in: "} />

    <h2>Date with Time Picker</h2>
    <Input
      type={"datetime-local"}
      label={"Geef hier een datum met tijd in: "} />

    <h2>Email</h2>
    <Input
      type={"email"}
      label={"Geef hier een email in: "}
      placeholder={"Email"} />

    <h2>File</h2>
    <Input
      type={"file"}
      label={"Upload je file hier:"}
      placeholder={"Upload file"} />

    <h2>Image (Button)</h2>
    <Input
      type={"image"}
      label={"Upload je afbeelding hier:"}
      defaultValue={"Upload afbeelding"} />

    <h2>Month</h2>
    <Input
      type={"month"}
      label={"Kies je maand: "} />

    <h2>Number</h2>
    <Input
      type={"number"}
      label={"Kies een getal: "} />

    <h2>Password</h2>
    <Input
      type={"password"}
      label={"Vul een wachtwoord in: "} />

    <h2>Radio button</h2>
    <Input
      type={"radio"}
      label={"Kies een radio button: "} />

    <h2>Range slider</h2>
    <Input
      type={"range"}
      label={"Selecteer een range: "} />

    <h2>Reset button</h2>
    <Input
      type={"reset"} />

    <h2>Search button</h2>
    <Input
      type={"search"}
      label={"Zoek naar een bepaalde waarde: "}/>

    <h2>Submit button</h2>
    <Input
      type={"submit"} />

    <h2>Telephone number</h2>
    <Input
      type={"tel"}
      label={"Geef een telefoon nummer in: "} />

    <h2>Text</h2>
    <Input
      type={"text"}
      label={"Geef hier je naam in:"}
      placeholder={"Naam"} />

    <h2>Time</h2>
    <Input
      type={"time"}
      label={"Geef hier de tijd in:"} />

    <h2>Url</h2>
    <Input
      type={"url"}
      label={"Geef hier een url in:"} />

    <h2>Week</h2>
    <Input
      type={"week"}
      label={"Geef hier een week in:"} />


    <h2>Select</h2>
    {/* OptGroup */}
    <select>
      <option value="be">Belgie</option>
      <option value="nl">Nederland</option>
    </select>

    <h2>Select with input</h2>
    <input type="text" name="city" list="cityname" />
    <datalist id="cityname">
      <option value="Boston" />
      <option value="Cambridge" />
    </datalist>


    <h2>Textarea</h2>
    <textarea cols={30} rows={10} />

    <br/>
    <br/>
    <br/>

  </div>;
}


export default App;
