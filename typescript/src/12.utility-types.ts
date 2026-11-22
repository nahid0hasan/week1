interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createAt: Date;
  assignTo: string;
}

// Partial - makes all properties optional
type PartialTodo = Partial<Todo>;
let updatedTodo: PartialTodo = {
  completed: true,
};

// Required - makes all properties required
type RequiredTodo = Required<Todo>;
let addTodo: RequiredTodo = {
  title: "Redesign site",
  description: "I need to finish this website redesign work in today",
  completed: false,
  createAt: new Date(),
  assignTo: "Yes",
};

// Readonly - makes all properties readonly
type ReadonlyTodo = Readonly<Todo>;
let myTodo: ReadonlyTodo = {
  title: "Redesign site",
  description: "I need to finish this website redesign work in today",
  completed: false,
  createAt: new Date(),
  assignTo: "Yes",
};
// myTodo.completed = true;

// Pick - pick specific properties
type TodoPreview = Pick<Todo, "title" | "description">;
let todoPreview: TodoPreview = {
  title: "nahid",
  description: "Work ta finish korte hobe",
};

// Omit - omit specific properties
type TodoWithoutDate = Omit<Todo, "createAt">;
let todoWithoutDate: TodoWithoutDate = {
  title: "Create website",
  description: "Ajke SIte ta design korte hobe",
  completed: false,
  assignTo: "Nahid",
};

// Record - Construct object type with specific keys and value type
type PageInfo = {
  title: string;
  url: string;
};
type Pages = "home" | "about" | "contact";
type Merged = Record<Pages, PageInfo>;
let pages: Merged = {
  home: {
    title: "Home",
    url: "/",
  },
  about: {
    title: "About Us",
    url: "/about-us",
  },
  contact: {
    title: "Contact Us",
    url: "/contact-us",
  },
};

// ReturnType - get return type of function
function createUser() {
  return {
    id: 23,
    name: "Nahid",
    email: "nahid@gmail.com",
  };
}
type UserType = ReturnType<typeof createUser>;

// ---- FUNCTION CALL KORA ----
const myUser: UserType = createUser();

// Ekhon tumi data gulo access korte parbe
console.log(myUser.name); // Output: Nahid
console.log(myUser.email); // Output: nahid@gmail.com
