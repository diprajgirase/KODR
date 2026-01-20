import './App.css'

function App() {

  return (
    <>
    useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/posts")
           .then((res) => res.json())
           .then((data)=> {
            setData(data)
            setLoading(false)
           })
           .catch((err)=>{
            setError(err)
            setLoading(false)
           })
    }, [])
    </>
  )
}

export default App;
