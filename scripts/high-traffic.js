console.log("Simulating 500 simultaneos requests");

const highTrafficSimulator = async () => {
  await Promise.all(
    Array.from(Array(500)).map(() => fetch("http://localhost:3000/cats"))
  );
};

highTrafficSimulator();
