'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/ben-kiami';

  const listApiFetch = function(...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          error = { code: res.status };
        }
        return res.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        return data;
      });
  };

  const getItems = function() {
    return listApiFetch(BASE_URL + '/items');
  };

  const createItem = function(name) {
    const newItem = JSON.stringify({
      name
    });
    const options = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem
    };
    return listApiFetch(BASE_URL + '/items/', options);
  };

  const updateItem = function(id, updateData) {
    const updateDataJSON = JSON.stringify(updateData);
    const options = {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: updateDataJSON
    };
    return listApiFetch(BASE_URL + '/items/' + id, options);
  };

  const deleteItem = function(id) {
    const options = {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    };
    return fetch(BASE_URL + '/items/' + id, options);
  };

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
})();
