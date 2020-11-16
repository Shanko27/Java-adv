export class UserService {
_url = 'https://jsonplaceholder.typicode.com'

  getUsers(){
    return  fetch(`${this._url}/users`).then(value => value.json())
}
}