import React, {Component} from 'react';
import {PostService} from "../services/PostService";
import Post from "./Post";

class Posts extends Component {
    _postService = new PostService()
    state = {
        post: [],
        postId: null
    }
    componentDidMount() {
        this._postService.getPost().then(value => {
            this.setState({post: value})
        });
    }
    getPostId = (id) => {
        let fil = this.state.post.filter(value => value.id === id);
        this.setState({postId: fil[0]})
    }

    render() {
        let {postId} = this.state
        return (
            <div>
                {this.state.post.map(value => (<Post date={value} key={value.id} postId={this.getPostId}/>))}
            <hr/>
                {postId && (<Post date={postId}/>)}
            </div>
        );
    }
}

export default Posts;