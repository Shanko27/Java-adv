export default  function User(props){

let oneUser = props.getOneUser

    let {id,name,email} = props.item;
return (<div>
    {id} - {name} - {email}
    <div>
        <button onClick={()=>oneUser(id)}>get this one</button>
    </div>
</div>)

}