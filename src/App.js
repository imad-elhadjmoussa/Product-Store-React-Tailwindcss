import { useState } from "react";
import { Main } from "./Components/Main";
import { Navbar } from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import data from "./Data/data";

function App() {
  const [newData, setNewData] = useState(data);


  const handelBtn = (s) => {
    if (s === 'All Products') {
      setNewData(data);
    } else {
      let d;
      d = data.filter((e) => {
        return e.company === s;
      })
      setNewData(d);
    }
  }

  const handelChekbox = (s) => {
    let t = s.split(" ");
    if (t[1].toLowerCase() === "category") {
      if (t[0].toLowerCase() === 'all') {
        setNewData(data);
      } else {
        let d = data.filter((e) => {
          return t[0].toLowerCase() === e.category.toLowerCase()
        })
        setNewData(d);
      }
    }
    if (t[1].toLowerCase() === "colors") {
      if (t[0].toLowerCase() === 'all') {
        setNewData(data);
      } else {
        let d = data.filter((e) => {
          return t[0].toLowerCase() === e.color.toLowerCase()
        })
        setNewData(d);
      }
    }
    if (t[1].toLowerCase() === "price") {
      console.log(t)
      console.log(s)
      if (t[0].toLowerCase() === 'all') {
        setNewData(data);
      } else {
        let d = data.filter((e) => {
          return (+e.newPrice >= +t[2] && +e.newPrice <= +t[3]);
        })
        setNewData(d);
      }
    }
  }

  const handelInput = (s) => {
    let d = data.filter((e) => {
      return e.title.toLowerCase().includes(s.toLowerCase());
    })
    setNewData(d);
  }




  return (
    <div className="">
      {/* Side bar */}
      <Sidebar handelChekbox={handelChekbox} />
      {/* Navbar */}
      <Navbar handelInput={handelInput} />
      {/* Main */}
      <Main data={newData} handelBtn={handelBtn} />
    </div>
  );
}

export default App;
