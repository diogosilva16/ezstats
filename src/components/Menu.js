import React from 'react';
import '../style/custom.css';

function Menu() {
    return (
        <div>
            <div id="menu" className={"p-0"}>
                <div id="menu_titulo" className="menu_item">
                    <a href="/">
                        <div id="menu_img">
                            <img className={"menuImg"} src={require('../img/logo_top.png')} alt={"EzStats"}/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Menu;