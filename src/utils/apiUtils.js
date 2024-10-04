// apiUtils.js
export const apiRequest = async (url, method = 'GET', body = null) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : null,
    };
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};


