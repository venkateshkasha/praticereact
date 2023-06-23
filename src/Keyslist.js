function Keyslist(){
    let students = [
        {id:1, name:"x"},
        {id:2, name:"y"},
        {id:3, name:"z"}
    ]
    return(
        <ul>{
                students.map((data) =>
                <li key  = {data.id}>
                    {data.name}
                </li>
                )
        }
        </ul>
        )
    }
    export default Keyslist
