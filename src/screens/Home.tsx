import ButtonMyLocation from "../components/ButtonMyLocation"
import MapView from "../components/MapView"
import SearchBox from "../components/SearchBox"

const Home = () => {
  return (
    <>
      <MapView />
      <ButtonMyLocation />
      <SearchBox />
    </>
  )
}

export default Home