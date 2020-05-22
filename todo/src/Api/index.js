const API_URL = process.env.REACT_APP_API_URL + "todo";

export const api = {
    get: async () => {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log(response);
    },
    post: async (text) => {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(text),
        });

        console.log(response);
    },
    put: async (obj) => {
        const { id, ...rest } = obj;
        const response = await fetch(API_URL + `/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rest),
        });

        console.log(response);
    },
    delete: async (id) => {
        const response = await fetch(API_URL + `/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log(response);
    },
};