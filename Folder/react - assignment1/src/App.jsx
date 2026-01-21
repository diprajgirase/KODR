import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data)
        setLoading(false);
      })
      .catch((err)=>{
        setError(err);
        setLoading(false);
      });
  }, []);

  return <></>;
}

export default App;
