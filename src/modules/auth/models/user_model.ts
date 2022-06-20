export interface UserInput {
  id?: number | null;
  username: string;
  email: string;
  name: string;
  password?: string;
}

class User {
  public id: number | null;
  public username: string;
  public email: string;
  public name: string;
  public password: string;

  constructor({id = null, username = '', name = '', password = '', email = ''}: UserInput){
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.name = name;
  }
}

export default User;
