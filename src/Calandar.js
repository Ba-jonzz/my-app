import React from 'react';
import { Calendar, theme } from 'antd';
import './Calendar.css'

const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};
const App = () => {
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <div style={wrapperStyle}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} cellRender={(date)=>{
        return  date.date() === 10 || date.date() === 20|| date.date() === 30  ?<div className='promotion'>-20%</div>:""
      }}
      
      onSelect={(value) => {
        alert(value.format('YYYY-MM-DD'));
      }}
      />
    </div>
  );
};
export default App;