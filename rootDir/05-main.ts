class User51 {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

// this class is just same as User51
class User52 {
  public firstName: string;
  public lastName: string;

  public constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

const user51 = new User51("Monster", "Lessons");
// everything is public
console.log(user51.getFullName());

// Private, public and protected => default is public

// Private => can use it inside the class only
class User53 {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

const user53 = new User53("Kunal", "Khatri");
// can't access private varaibles from the instance of the class or object
console.log(user53.getFullName());
// console.log(user53.firstName); => gives error

// Protected => allowed in class and it's children
class User54 {
  protected firstName: string;
  protected lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

const user54 = new User54("Kunal", "Khatri");
// can't access protected variables from the instance of the class or object
console.log(user54.getFullName());

// Readonly
class User55 {
  protected firstName: string;
  protected lastName: string;
  // create constants in the class
  readonly unchangableName: string;
  private readonly unchangableNamePrivate: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangableName = firstName;
    this.unchangableNamePrivate = firstName;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }

  changeUnchangableName(): void {
    // this.unchangableName ="foo" // gives error
  }
}

const user55 = new User55("Kunal", "khatri");
console.log(user55.unchangableName);
// console.log(user55.unchangableNamePrivate) //  gives error

// creating a interface and our class must implement it
interface UserInterface5 {
  getFullName(): string;
}

// getFullName should be present inside the class that implements UserInterface5
class User56 implements UserInterface5 {
  protected firstName: string;
  protected lastName: string;
  // create constants in the class
  readonly unchangableName: string;
  private readonly unchangableNamePrivate: string;
  // this property is accessible in class only not in the instances
  static readonly maxAge = 50;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangableName = firstName;
    this.unchangableNamePrivate = firstName;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }

  changeUnchangableName(): void {
    // this.unchangableName ="foo" // gives error
  }
}

const user56 = new User56("Kunal", "Khatri");
// console.log(user56.maxAge) // gives error
// only accessible from class only
console.log(User56.maxAge);

class Admin extends User56 {
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}

const admin = new Admin("foo", "bar");
console.log(admin.changeUnchangableName());
console.log(admin.getFullName());
console.log(admin.unchangableName);

console.log(Admin.maxAge);
// console.log(Admin.unchangableNamePrivate)    // gives error

// only admin can use these functions and not user
console.log(admin.getEditor());
console.log(admin.setEditor("Kunal"));
