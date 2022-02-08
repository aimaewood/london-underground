import './App.css';
import {useState} from "react";
import {useEffect} from "react";
import {Dropdown} from "./components/Dropdown";


function App() {
    let[stationFrom, updateFrom] = useState("")
    let[stationTo, updateTo] = useState("")
    let [allStationData, setStations] = useState([])
    let directLines = []
    useEffect(() => {
            fetch('/london-underground-stations.json')
                .then(data => data.json())
                .then(results => {
                    setStations(results.stations)
                })
        }
    )

  return (
    <div className="App">
        <div className="container">
            <div className="intro">
                Plan your journey...
            </div>
            <form>
                <Dropdown directionLabel={"From:"}
                          direction={"from"}
                          changeHandler={(event) => updateFrom(event.target.value)}/>
                <Dropdown directionLabel={"To:"}
                          direction={"to"}
                          changeHandler={(event) => updateTo(event.target.value)}/>
                <input className="input" type="submit" value="Find route"
                       onClick={(event) => {
                           let station1 = allStationData.filter(station => station.name.includes
                           (stationFrom))
                           let station2 = allStationData.filter(station => station.name.includes
                           (stationTo))


                           /*lines2.push(allStationData.filter(station => station.name.includes
                           (stationTo)).map(station1 => station1.lines))
                           for(let i=0; i<lines1.length; i++){
                               for(let n=0; n<lines2.length; n++){
                                   if(lines1[i] === lines2[n]){
                                       directLines.push(lines1[i])
                                       break
                                   }
                               }
                           }*/
                           event.preventDefault()
                           console.log(allStationData)
                           console.log(station2.lines)
                       }
                }/>

            </form>
        </div>
    </div>
  );
}

export default App;
