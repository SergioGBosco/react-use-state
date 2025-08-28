import CardLenguage from "./CardLenguage"
import NavBar from "./NavBar"
const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <NavBar />
        </div>
        <div className="row">
          <CardLenguage />
        </div>
      </div>
    </main >
  )
}

export default Main
