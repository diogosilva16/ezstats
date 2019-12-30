import React, {useState, useEffect} from 'react';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import queryString from "query-string";
import {useLocation, useHistory} from 'react-router-dom';
import MinimalSum from '../components/MinimalSum';
import Input from '../components/Input';

function Summoner() {

    const API_KEY = process.env.REACT_APP_LEAGUE_API_KEY;
    let location = useLocation();
    let history = useHistory();

    const [welcome, setWelcome] = useState(true);
    const [id, setId] = useState('');
    const [accId, setAccId] = useState('');
    const [name, setName] = useState('');
    const [summonerLvl, setSummonerLvl] = useState('');
    const [profileIconId, setProfileIconId] = useState('');
    const [error, setError] = useState();
    const [isLoading, setLoading] = useState(false);
    const [matches, setMatches] = useState([]);
    const [matchRegion, setMatchRegion] = useState('');
    const [visible, setVisible] = useState(5);

    useEffect(() => {
        const {query, region} = queryString.parse(location.search);
        if (region, query) {
            fetchData(region, query)
        }
    }, []);

    const fetchData = async (region, query = null) => {
        setLoading(true);
        let res = await fetch(`https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${query}?api_key=${API_KEY}`);
        let summoner = await res.json();
        if (!summoner.id) {
            setError(summoner.status.message);
            setLoading(false);
        } else {
            const {accountId} = summoner;
            fetchUserMatches(region, accountId, summoner);
        }
    };

    const fetchUserMatches = async (region, accountId, summoner) => {
        const {id, name, profileIconId, summonerLevel} = summoner;
        let res = await fetch(`https://${region}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?api_key=${API_KEY}`);
        let games = await res.json();

        setMatches(games.matches);
        setMatchRegion(region);
        setName(name);
        setId(id);
        setProfileIconId(profileIconId);
        setSummonerLvl(summonerLevel);
        setAccId(accountId);
        setError(false);
        setLoading(false);
        setWelcome(false);

    };

    const handleData = (region, query) => {
        history.push(`/summoner?query=${query}&region=${region}`);
        fetchData(region, query);
    };

    return (
        <div className={"container-fluid"}>
            <Input handleData={(region, data) => handleData(region, data)}/>
            {isLoading && <p style={{color: 'red'}}>LOADINGGGGGGGGGGGGG!!!</p>}
            {error && !isLoading && <p style={{color: 'blue'}}>{error}</p>}
            {!error && !isLoading && (
                <div>
                    <MinimalSum icon={profileIconId} name={name}
                                lvl={summonerLvl}/>
                    <Tabs>
                        <TabList>
                            <Tab>Match History</Tab>
                            <Tab>Champion Mastery</Tab>
                            <Tab>Live Match</Tab>
                        </TabList>
                        <TabPanel>
                            {matches && matches.slice(0, visible).map((match, key) => {
                                return (
                                    <p style={{color: "#fff"}}>{match.gameId}</p>
                                )
                            })}
                        </TabPanel>
                        <TabPanel>
                            <p>2</p>
                        </TabPanel>
                        <TabPanel>
                            <p>3</p>
                        </TabPanel>
                    </Tabs>
                </div>
            )}
        </div>
    )
}

export default Summoner;
