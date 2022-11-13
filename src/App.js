import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [Hori, setHori] = useState(10);
  const [Verti, setVerti] = useState(10);
  const [Blur, setBlur] = useState(10);
  const [Color, setColor] = useState('black');
  const [CheckOn, setCheckOn] = useState(false);
  return (
    
    <div className="App">
      
      <div className='controls'>
          <label className='label'>Comprimento Horizontal</label>
          <input type="range" min="-200" max="200" value={Hori} onChange={(e)=> setHori(e.target.value)}/>
          <label className='label'>Comprimento Vertical</label>
          <input type="range" min="-200" max="200" value={Verti} onChange={(e)=> setVerti(e.target.value)}/>
          <label className='label'>Borrão</label>
          <input type="range" min="0" max="200" value={Blur} onChange={(e)=> setBlur(e.target.value)}/>
          <label className='label'>Cor</label>
          <input  type="color" value={Color} onChange={(e)=> setColor(e.target.value)}/>
          <div className="switch checar">
              <label>
                <span className='check'>Outline</span>
                <input type="checkbox" checked={CheckOn} onChange={()=> setCheckOn(!CheckOn)}/>
                <span className="lever"></span>
                <span className='check'>Inset</span>
              </label>
          </div>
      </div>
      <div className='output'>
          <div className='box' style={{boxShadow: `${CheckOn?"inset": ""} ${Hori}px ${Verti}px ${Blur}px ${Color}`}}>
            <p>box-shadow: {Hori}px {Verti}px {Blur}px {Color}</p>
          </div>
      </div>
    </div>
  );
}

export default App;
