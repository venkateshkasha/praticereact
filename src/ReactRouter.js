import { Route, Routes } from 'react-router-dom'
function Home() {
    return (<h1>Home Component</h1>)
}


function About() {
    return (<h1>About Component</h1>)
}


function Blog() {
    return (<h1>Blog Component</h1>)
}

function NotFound (){
    return(
        <img src="./img/Error.jpeg"></img>
    )
}
function ReactRouter() {
    return (
        <>  <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Blog" element={<Blog />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
        </>

    )
}
export default ReactRouter;