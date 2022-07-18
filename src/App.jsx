import "./App.scss";
import Card from "./components/Card/Card";
import team from "./data/team";



const App = () => {
  
  const cardDisplay = team.map(member => {
    return <Card key={member.id} name={member.name} role={member.role} />
  })
    return (
        <body>
            <h1>Ticket Tracker</h1>
            <main>
                {cardDisplay}
            </main>
        </body>
    )
}

export default App;