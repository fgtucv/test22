export const updateAccount = async function updateAccount(obj, id) {
    try {
        const options = {
            method: "PUT",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        };

        const account = await fetch(`https://67a8ab426e9548e44fc1adc4.mockapi.io/projects/accounts/${id}`, options).then((data) => {
            return data.json();
        });

        return account;
    } catch (error) {
        return error;
    };
}