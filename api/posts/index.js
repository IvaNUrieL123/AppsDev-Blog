import fetch from 'isomorphic-fetch';

export function getPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts/');  // Replace with the new API URL
}

export function getPost(slug) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/?title=${slug}`);  // Replace with the new API URL
}
