export default function Post (props) {
    let {id, title, body} = props.date
let onePost = props.postId
    return (
        <div>
            {id} - {title} - {body}
<button onClick={() => onePost(id)}>get P</button>
        </div>)

}