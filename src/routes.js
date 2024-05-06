import {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} from './service/bookshelf.js';

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: () => 'Bookself API v1 with Hapi framework!',
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookById,
  },
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: updateBook,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBook,
  },
];

export default routes;
