// Promise with typescript
type functionPromiseReturnType = {
  id: number;
  name: string;
};
function fetchUser(id: number): Promise<functionPromiseReturnType> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "Nahid" });
    }, 1000);
  });
}

// Async/Await
async function getUserData(id: number): Promise<void> {
  try {
    const user = await fetchUser(id);
    console.log(user.name);
  } catch (err) {
    console.log("Error fetching user", err);
  }
}

// Generic async function
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}
fetchData<string>("");
