import { v4 as uuid } from "uuid";
import { hashSync } from "bcryptjs";

export class User {
  email: string;
  password: string;
  id: string;

  constructor(email: string, password: string, id: string = uuid()) {
    this.id = id;
    this.email = email;
    this.password = hashSync(password, 8);
  }
}
