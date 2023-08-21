import BottomBar from "components/BottomBar";
import Content from "components/Content";
import SideBar from "components/SideBar";

function App() {
  return (
    <>
      <div className="container">
        <SideBar />

        <Content />
      </div>

      <BottomBar />
    </>
  );
}

export default App;
