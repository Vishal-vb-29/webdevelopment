import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    function clickHandler(){
        navigate("./about");
    }
    function notHandler(){
        navigate("*");
    }
    function supportHandler(){
        navigate("./support");
    }
    function labsHandler(){
        navigate("./labs");
    }
    function backHandler(){
        navigate(-1);
    }
  return (
    <div>
    This is Home Page<br/>
    <button onClick={clickHandler}>Go to About Page</button><br/>
    <button onClick={notHandler}>Go to NotFound Page</button><br/>
    <button onClick={supportHandler}>Go to Support Page</button><br/>
    <button onClick={labsHandler}>Go to Labs Page</button><br/>
    <button onClick={backHandler}>Go Back</button>
    </div>
  )
}

export default Home;
