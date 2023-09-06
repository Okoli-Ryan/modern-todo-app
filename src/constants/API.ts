const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export const API = {
	getTodos: BASE_URL,
	getTodo: (index: number) => `${BASE_URL}/${index}`,
};
