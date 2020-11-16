export class PostService {
    _url = 'https://jsonplaceholder.typicode.com'
    getPost() {
        return fetch(`${this._url}/posts`).then(value => value.json())
    }
}