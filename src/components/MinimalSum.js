import React from 'react';

function MinimalSum({icon, name, lvl}) {
    return (
        <div className={"text-center sumInfo"}>
            {icon != null &&
            <img className={"rounded img-fluid sumImg"} height="100" width="100"
                 src={`https://cdn.communitydragon.org/latest/profile-icon/${icon}`}
                 alt="Summoner Pic"/>
            }
            <h1 className="sumName">{name}</h1>
            <h5> Level: {lvl}</h5>
        </div>
    )
}

export default MinimalSum;