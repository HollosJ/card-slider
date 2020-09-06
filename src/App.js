import React, { useState } from "react";
import "./App.scss";

import Card from "./Card";

function App() {
  //DATA
  const myData = [
    {
      year: 1939,
      events: [
        "Hitler invades Poland on 1 September. Britain and France declare war on Germany two days later.",
      ],
      img:
        "http://totallyhistory.com/wp-content/uploads/2013/04/Polish_infantry_marching_-2_1939.jpg",
    },
    {
      year: 1940,
      events: [
        "Rationing starts in the UK.",
        "German 'Blitzkrieg' overwhelms Belgium, Holland and France.",
        "Churchill becomes Prime Minister of Britain.",
        "British Expeditionary Force evacuated from Dunkirk.",
        "British victory in Battle of Britain forces Hitler to postpone invasion plans.",
      ],
      img:
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/07/10/12/Heinkel_He_111_during_the_Battle_of_Britain.jpg",
    },
    {
      year: 1941,
      events: [
        "Hitler begins Operation Barbarossa - the invasion of Russia.",
        "The Blitz continues against Britain's major cities.",
        "Allies take Tobruk in North Africa, and resist German attacks.",
        "Japan attacks Pearl Harbor, and the US enters the war.",
      ],
      img:
        "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAzNzkwMTY1NzI3/gettyimages-2660140-2.jpg",
    },
    {
      year: 1942,
      events: [
        "Germany suffers setbacks at Stalingrad and El Alamein.",
        "Singapore falls to the Japanese in February - around 25,000 prisoners taken.",
        "American naval victory at Battle of Midway, in June, marks turning point in Pacific War.",
        "Mass murder of Jewish people at Auschwitz begins.",
      ],
      img:
        "https://www.yadvashem.org/yv/fr/expositions/43-rue-vieille-du-temple/images/station_6/01.jpg",
    },
    {
      year: 1943,
      events: [
        "Surrender at Stalingrad marks Germany's first major defeat.",
        "Allied victory in North Africa enables invasion of Italy to be launched.",
        "Italy surrenders, but Germany takes over the battle.",
        "British and Indian forces fight Japanese in Burma.",
      ],
      img:
        "https://static01.nyt.com/images/2012/01/30/learning/Feb02LN/Feb02LN-blog480.jpg",
    },
    {
      year: 1944,
      events: [
        "Allies land at Anzio and bomb monastery at Monte Cassino.",
        "Soviet offensive gathers pace in Eastern Europe.",
        "D Day: The Allied invasion of France. Paris is liberated in August.",
        "Guam liberated by the US Okinawa, and Iwo Jima bombed.",
      ],
      img:
        "https://i.guim.co.uk/img/media/66374bee0516d7bff1d8ca1e3f144cf3e14f0649/0_431_3500_2099/master/3500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=41d5fb51eb49b01539fd869b36ce1a69",
    },
    {
      year: 1945,
      events: [
        "Auschwitz liberated by Soviet troops.",
        "Russians reach Berlin: Hitler commits suicide and Germany surrenders on 7 May.",
        "Truman becomes President of the US on Roosevelt's death, and Attlee replaces Churchill.",
        "After atomic bombs are dropped on Hiroshima and Nagasaki, Japan surrenders on 14 August.",
      ],
      img:
        "https://cdnph.upi.com/svc/sv/upi/8581596809704/2020/1/ffc24f10fb1da77fb975b189d0a7d2f9/UPI-Almanac-for-Sunday-Aug-9-2020.jpg",
    },
  ];

  //STATE
  const [idx, setIdx] = useState(0);

  //HANDLE INCREMENT
  const increment = () => {
    if (idx < 6) {
      setIdx((prev) => prev + 1);
    }
  };

  //HANDLE DECREMENT
  const decrement = () => {
    if (idx > 0) {
      setIdx((prev) => prev - 1);
    }
  };

  return (
    <div className="App">
      <div className="buttons">
        <div
          className="btn decrement"
          onClick={decrement}
          style={{ cursor: "pointer" }}
        >
          &lt;
        </div>
        <div
          className="btn increment"
          onClick={increment}
          style={{ cursor: "pointer" }}
        >
          &gt;
        </div>
      </div>
      <div className={`cards-slider active-slide-${idx}`}>
        <div
          className="cards-slider-wrapper"
          style={{ transform: `translateX(-${idx * (100 / myData.length)}%)` }}
        >
          {myData.map((data, i) => {
            return <Card key={i} data={data} id={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
