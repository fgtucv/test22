export const getAccountApi = async (id) => {
    try {
        const account = await fetch(`https://67a8ab426e9548e44fc1adc4.mockapi.io/projects/accounts?id=${id}&l=3`).then((data) => {
            return data.json();
        });

        return account;
    } catch (error) {
        return error;
    };
};