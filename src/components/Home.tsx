import {useEffect} from "react"
const Home = () => {
    const fetchData = async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        console.log(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    
  return (
    <div>Home</div>
  )
}

export default Home