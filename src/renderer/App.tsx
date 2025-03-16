import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Slider, Switch } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design styles
import SplashScreen from './SplashScreen';
import './App.css';

// CSS-in-JS styling
// eslint-disable-next-line no-undef
const styles: Record<string, React.CSSProperties> = {
  container: {
    background: '#111',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '500px',
    color: '#fff',
  },
  title: {
    fontSize: '18px',
    marginBottom: '15px',
    alignItems: 'center',
    textAlign: 'center',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  label: {
    fontSize: '14px',
    flex: 1,
  },
  slider: {
    flex: 2,
    margin: '0 10px',
  },
  value: {
    fontSize: '14px',
    width: '30px',
    textAlign: 'center',
  },
  switch: {
    backgroundColor: '#333',
  },
  switchActive: {
    backgroundColor: '#1890ff',
  },
};

function Hello() {
  const [hueShift, setHueShift] = useState(360);
  const [hoverIntensity, setHoverIntensity] = useState(5);
  const [rotateOnHover, setRotateOnHover] = useState(true);
  const [forceHover, setForceHover] = useState(false);
  return (
    <>
      <SplashScreen
        hoverIntensity={hoverIntensity}
        rotateOnHover={rotateOnHover}
        hue={hueShift}
        forceHoverState={forceHover}
        message="HELLO"
        widthSize={1200}
        heightSize={500}
      />

      <div style={styles.container}>
        <h3 style={styles.title}>Customize</h3>

        {/* Hue Shift Slider */}
        <div style={styles.item}>
          <span style={styles.label}>Hue Shift</span>
          <Slider
            min={0}
            max={360}
            value={hueShift}
            onChange={setHueShift}
            style={styles.slider}
          />
          <span style={styles.value}>{hueShift}</span>
        </div>

        {/* Hover Intensity Slider */}
        <div style={styles.item}>
          <span style={styles.label}>Hover Intensity</span>
          <Slider
            min={0}
            max={10}
            value={hoverIntensity}
            onChange={setHoverIntensity}
            style={styles.slider}
          />
          <span style={styles.value}>{hoverIntensity}</span>
        </div>

        {/* Rotate On Hover Switch */}
        <div style={styles.item}>
          <span style={styles.label}>Rotate On Hover</span>
          <Switch
            checked={rotateOnHover}
            onChange={setRotateOnHover}
            style={rotateOnHover ? styles.switchActive : styles.switch}
          />
        </div>

        {/* Force Hover State Switch */}
        <div style={styles.item}>
          <span style={styles.label}>Force Hover State</span>
          <Switch
            checked={forceHover}
            onChange={setForceHover}
            style={forceHover ? styles.switchActive : styles.switch}
          />
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
