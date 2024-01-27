import "./App.css";

//Spot Check 1
/* function Company(props) {
  return <SubCompany name={props.name} />;
}

function SubCompany(props) {
  return <h4>{props.name}</h4>;
}
//Spot Check 2

function generateCompanyTags(companies) {
  return companies.map((company, index) => (
    <Company key={index} name={company.name} revenue={company.revenue} />
  ));
} */
//Spot check 4
/* 
const Article = (props) => {
  return (
    <div>
      {props.info.color} {props.info.type}
    </div>
  );
};

const Wardrobe = () => {
  let wardrobe = [
    { type: "shirt", color: "red", size: "Medium" },
    { type: "shirt", color: "blue", size: "Medium" },
    { type: "pants", color: "blue", size: "Medium" },
    { type: "accessory", color: "sapphire", size: "" },
    { type: "accessory", color: "lilac", size: "" },
  ];

  return wardrobe.map((c) => <Article info={c} key={c.color + c.type} />);
};
 */
/* function App() {
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ];

  return <Company name={companies[0].name} revenue={companies[0].revenue} />;
} */

//Mapping Props
/* function App() {
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ];
  // Spot Check 1

  /*  return (
    <div>
      <Company name={companies[0].name} revenue={companies[0].revenue} />
      <Company name={companies[1].name} revenue={companies[1].revenue} />
      <Company name={companies[2].name} revenue={companies[2].revenue} />
    </div>
  ); 
  // Spot Check 2

  // return <div>{generateCompanyTags(companies)}</div>;

  //Mapping Props II
  return (
    //...other code
    <div>
      {companies.map((c) => (
        <Company key={c.name} name={c.name} revenue={c.revenue} />
      ))}
    </div>
  );
} 
//spot check 3

const App = () => {
  const upperCase = (name) => name.toUpperCase();

  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ];

  return (
    <div>
      {companies.map((c) => (
        <Company
          name={upperCase(c.name)}
          revenue={c.revenue}
          upperCase={upperCase}
        />
      ))}
    </div>
  );
};*/
/* const App = () => {
  return <Wardrobe />;
}; */
//Spot Check 5
const Article = (props) => {
  return (
    <div>
      {props.info.color} {props.info.type}
    </div>
  );
};

const Wardrobe = () => {
  let wardrobe = [
    { type: "shirt", color: "red", size: "Medium" },
    { type: "shirt", color: "blue", size: "Medium" },
    { type: "pants", color: "blue", size: "Medium" },
    { type: "accessory", color: "sapphire", size: "" },
    { type: "accessory", color: "lilac", size: "" },
  ];

  return wardrobe
    .filter((c) => c.color === "blue")
    .map((c) => <Article info={c} key={c.color + c.type} />);
};

const App = () => {
  return <Wardrobe />;
};

export default App;
