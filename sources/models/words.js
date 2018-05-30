export function getWords(id) {
    return webix.ajax().get(`http://localhost:3000/api/words/${id}`);
}