import {useState} from "react";
import {useEffect} from "react";

export const Dropdown = ({direction, directionLabel, changeHandler}) => {
    let [allStationNames, setNames] = useState([])
    useEffect(() => {
        fetch('/london-underground-stations.json')
            .then(data => data.json())
            .then(results => {
                const names = results.stations.map((obj) => obj.name)
                setNames(names)
            })
    }, [])
    return (
            <select className="input" name={direction} id={direction}
                    onChange={changeHandler}>
                <option value="" selected disabled hidden>{directionLabel}</option>
                {allStationNames.map((station, index) => {
                    return <option key={index} value={station}>{station}</option>
                }
                )}
            </select>
    )
}