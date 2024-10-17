import './App.css';
import styles from './App.module.css';
import Child from './Child';
import styled from 'styled-components';

const myInlineStyle = { 
  color: "lightblue", 
  fontSize: "12pt", 
  fontWeight: 800 
};

const GritP = styled.p`
  color: #ae8e42;
  font-weight: bold;
`;

function App() {

  return (
    <div>

      <h1>Lektion om Styling i React</h1>
      <p className="lightSalmon">
        Detta är paragraf som vi färgar i lightsalmon med hjälp av "global style" dvs style från en CSS-fil inkluderad i index.html.
      </p>
      <p className="lightSeaGreen">
        Detta är en paragraf som vi färgar i lightseagreen med hjälp av "local style" dvs style från en CSS-fil inkluderad i App.js.
      </p>
      { /* 
        style="color: lightblue; font-size: 12pt; font-weight: 800" 
        { color: "lightblue", fontSize: "12pt", fontWeight: 800 }
        */ }
      <p style={ myInlineStyle }>
        Detta är en paragraf som vi stylar lightblue med hjälp av inline-style. 
      </p>
      <p className={ styles.odeToClara }>
        Detta är en paragraf som vi stylar HotPink med hjälp av CSS Components. 
      </p>
      <Child />
      <GritP>
        Detta är en paragraf som vi stylar #ae8e42 med hjälp av styled-components.
      </GritP>
    </div>
  );
}

export default App;
