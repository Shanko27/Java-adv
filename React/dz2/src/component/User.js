 export default  function  User(props) {
let {id, name, email} =  props.item
let oneUser = props.getOneUser

     return (

      <div>

            {id} - {name} - {email}

        <button onClick={() => oneUser(id) }>get</button>
</div>
)
}