 import './App.css';
import Item from './component/Item';
import ItemDate from './component/ItemDate';

function App() {
  const response=[
    {
      itemName:"Different way from above",
      itemDate:"20",
      itemMonth:"June",
      itemYear:"1998"
    },
    {
      itemName:"Bhujia",
      itemDate:"19",
      itemMonth:"July",
      itemYear:"1999"
    },
    {
      itemName:"DishWarBar",
      itemDate:"29",
      itemMonth:"april",
      itemYear:"2010"
    }
  ]
  return (
    <div>
    <Item name="Nirma" >
        Inside custom tag item 
      </Item>
      <ItemDate day="22" month="June" year="1998">
      
      </ItemDate>
      <Item name="Nirma" ></Item>
      <ItemDate day="10" month="July" year="1999"></ItemDate>
      <Item name="Active Bar" ></Item>
      <ItemDate day="18" month="October" year="2010"></ItemDate>
    <card>
    <div className="App">
          Hello jee
    </div>

      <Item name={response[0].itemName}>CARD</Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>
    </card>
      
    </div>
     
  );
}

export default App;
