import React from "react";
import "./App.css";

function App() {
  const getClassName = (temperature) => {
    if (temperature < 15) {
      return "freezing";
    } else if (temperature >= 15 && temperature <= 30) {
      return "fair";
    } else {
      return "hell-scape";
    }
  };

  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ];

  const showCompany = (name, revenue) => {
    return (
      <div id={name} key={name}>
        {name} makes {revenue} every year
      </div>
    );
  };

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        {companies.map((company) => showCompany(company.name, company.revenue))}
      </div>

      <div className="ex-space">
        <h4 className="ex-title">Exercise 2</h4>
        <div className={`exercise ${getClassName(11)}`} id="ex-2">
          <div id="weatherBox" className={getClassName(11)}>
            {getClassName(33)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
