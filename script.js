const getUsersList = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
        const data = await response.json();
        const user = data.filter(({ company: { name } }) => name === "Johns Group");
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}

console.log(getUsersList())
