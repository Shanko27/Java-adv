export class UserService {
    _url = 'https://jsonplaceholder.typicode.com';
  async  getAllUser(){
       return await fetch(`${this._url}/users`).then(value => value.json().catch(err => console.log(err)));
    }
    getUserId(id){
        return fetch(`${this._url}/users/${id}`).then(value => value.json());
    }

}