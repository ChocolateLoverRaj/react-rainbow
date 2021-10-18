import React from 'react';
import './style.css';
import { useState } from 'react';
import RainbowCharacters from './RainbowCharacters';
import RainbowBackgroundGradient from './RainbowBackgroundGradient';
import NumberInput from 'rc-number-input';
import RainbowBorderImage from './RainbowBorderImage';
import gradientFns from './gradientFns';
import EqualHueBorder from './EqualHueBorder';

export default function App() {
  const [saturation, setSaturation] = useState(1);
  const [lightness, setLightness] = useState(0.5);
  const [text, setText] = useState('Magic Rainbow Text');
  const [fontSize, setFontSize] = useState(20);
  const [borderGradientType, setBorderGradientType] = useState('conic');
  const [borderWidth, setBorderWidth] = useState(50);
  const [roundedCorners, setRoundedCorners] = useState(true);

  const handleChangeLightness = (e) => {
    setLightness(e.target.value);
  };

  const handleBorderGradientChange = ({ target: { value } }) =>
    setBorderGradientType(value);

  const handleChangeRoundedCorners = ({ target: { checked } }) =>
    setRoundedCorners(checked);

  const style = { fontSize };

  return (
    <>
      <h1>
        <RainbowBackgroundGradient>Rainbow Design</RainbowBackgroundGradient>
      </h1>
      <h2>Settings</h2>
      <label>
        Saturation <br />
        <NumberInput
          min={0}
          max={1}
          value={saturation}
          onChange={setSaturation}
        />
      </label>
      <br />
      <label>
        Lightness
        <br />
        <input
          type="number"
          value={lightness}
          onChange={handleChangeLightness}
        />
      </label>
      <br />
      <label>
        Text
        <br />
        <textarea
          value={text}
          onChange={({ target: { value } }) => setText(value)}
        />
      </label>
      <br />
      <label>
        Font fontSize
        <br />
        <NumberInput value={fontSize} onChange={setFontSize} min={0} />
      </label>
      <br />
      <label>
        Border gradient type <br />
        <select
          value={borderGradientType}
          onChange={handleBorderGradientChange}
        >
          {Object.keys(gradientFns).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Border width <br />
        <NumberInput value={borderWidth} onChange={setBorderWidth} min={0} />
      </label>
      <br />
      <label>
        Round corners (when possible) <br />
        <input
          type="checkbox"
          checked={roundedCorners}
          onChange={handleChangeRoundedCorners}
        />
      </label>
      <h2>Preview</h2>
      <h3>Rainbowing Individual characters</h3>
      <RainbowCharacters
        style={style}
        lightness={lightness}
        saturation={saturation}
      >
        {text}
      </RainbowCharacters>
      <h3>Rainbowing using a background gradient</h3>
      <RainbowBackgroundGradient saturation={saturation} lightness={lightness}>
        <span style={style}>{text}</span>
      </RainbowBackgroundGradient>
      <h3>Rainbow border using border image</h3>
      <RainbowBorderImage
        saturation={saturation}
        lightness={lightness}
        type={borderGradientType}
      >
        <div
          style={{
            width: 150,
            height: 50,
            resize: 'both',
            overflow: 'scroll',
            borderWidth,
          }}
        />
      </RainbowBorderImage>
      <h3>
        Rainbow border with equall amount of hues (not perfect because of bug
        with dependency which will be fixed later)
      </h3>
      <EqualHueBorder
        saturation={saturation}
        lightness={lightness}
        borderWidth={borderWidth}
        roundedCorners={roundedCorners}
      >
        <div
          style={{
            width: 150,
            height: 50,
            resize: 'both',
            overflow: 'scroll',
          }}
        />
      </EqualHueBorder>
    </>
  );
}
