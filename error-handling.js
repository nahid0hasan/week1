function checkServerStatus(serverLoad) {
  return new Promise((resolve, reject) => {
    if (serverLoad > 80) {
      reject("Server Overloaded!");
    } else {
      resolve("Server is healthy and running smoothly.");
    }
  });
}

async function monitorServer() {
  try {
    const status = await checkServerStatus(82);
    console.log(status);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("end");
  }
}
monitorServer();
