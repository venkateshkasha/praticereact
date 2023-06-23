function User(props){
    let numbers = props.numbers;
     const listItem = numbers.map((a,index) => 
        <li key={index}>{a}</li>
        );
        return(
            <ul>
                {listItem}
            </ul>
        )

};
export default User;