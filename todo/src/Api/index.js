const API_URL = process.env.REACT_APP_API_URL + "todo";

export const api = {
    get: async () => {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            const response_json = await response.json();
            return response_json;
        }

        return null;
    },
    post: async (text) => {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(text),
        });

        if (response.status === 200) {
            const response_json = await response.json();
            return response_json;
        }

        return null;
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

        if (response.status === 200) {
            const response_json = await response.json();
            return response_json;
        }

        return null;
    },
    delete: async (id) => {
        const response = await fetch(API_URL + `/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 204) {
            const response_json = await response.json();
            return response_json;
        }

        return null;
    },
};
