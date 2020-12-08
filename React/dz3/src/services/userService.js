export class UserService {
    _url = 'https://jsonplaceholder.typicode.com';
getUser(){
    return fetch(`${this._url}/users`).then(value => value.json());
}
}