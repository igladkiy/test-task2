import Popup from './Popup/Popup';
import { mockedData } from './mockedData';
function App() {
console.log(mockedData,'mockedData');
  return (
    <div>
      {mockedData.map((shop, index) => (
        <Popup key={index} shop={shop} allShopsData={mockedData} />
      ))}
    </div>
  );
}

export default App;
