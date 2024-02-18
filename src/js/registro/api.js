export async function createUser(user) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        
        if (response.status === 201) {
            const responseJson = await response.json();
            return { success: true, data: responseJson };
        }
        
        return { success: false, data: "ERROR failed request" };
    } catch (error) {
        return { success: false, data: error.message };
    }
}
