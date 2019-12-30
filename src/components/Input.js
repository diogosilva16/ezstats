import React, {useState} from 'react';

function Input({handleData}) {

    const [query, setQuery] = useState('');
    const [region, setRegion] = useState('euw1');

    const updateInput = e => {
        e.preventDefault();
        setQuery(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        handleData(region, query);
    };

    return (
        <div className={"col-md-6 offset-md-3"}>
            <form onSubmit={handleSubmit}>
                <div className={"input-group mt-2 mb-3 pt-4"}>
                    <select className={"custom-select"} onChange={event => setRegion(event.target.value)}>
                        <option value={"euw1"}>EUW</option>
                        <option value={"na1"}>NA</option>
                    </select>
                    <input className={"form-control"} placeholder={"Summoner Name"} type="input" name="summonername"
                           onChange={updateInput}
                           value={query} required/>
                    <div className={"input-group-append"}>
                        <button className={"btn btn-outline-info"} type="submit">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </div>)
}

export default Input;