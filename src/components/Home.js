import React from 'react';
import Input from "./Input";
import {useHistory} from 'react-router-dom';

function Home() {

    let history = useHistory();
    const handle = (data,search) => history.push(`/summoner?query=${search}&region=${data}`);

    return (
        <div>
            <div className={"logo"}>
                <img className={"welcomeImage img-fluid"} src={require('../img/logo.png')} alt={"EzStats"}/>
            </div>
            <Input handleData={handle} />
        </div>
    )

}

export default Home;