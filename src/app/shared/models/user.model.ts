export class User {
  // ================================================
  // =              ATTRIBUTES SECTION              =
  // ================================================
  id: string;
  username: string;
  email = 'example.user@mail.com';
  bgPicture: string;
  avatar = 'https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png';
  firstName: string;
  lastName: string;
  get fullName() {
    if (!this.firstName && !this.lastName) {
      return 'Example User';
    }
    return `${this.firstName} ${this.lastName}`;
  }
  // ================================================
  // =             CONSTRUCTOR SECTION              =
  // ================================================
  constructor() {
  }
}
