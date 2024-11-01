import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.yumserver.com/15839/generic/', 
});

export const addBook = (bookData) => {
  return axiosInstance.post('books', bookData);
};

export const addAuthor = (authorData) => {
  return axiosInstance.post('authors', authorData);
};

export function editBook(id, updatedData) {
  return axiosInstance.patch('books', { idcod: id, ...updatedData });
}

export function editAuthor(id, updatedData) {
  return axiosInstance.patch('authors', { idcod: id, ...updatedData });
}

export function deleteBook(id) {
  return axiosInstance.delete('books', { data: { idcod: id } });
}

export function deleteAuthor(id) {
  return axiosInstance.delete('authors', { data: { idcod: id } });
}

export default axiosInstance;
