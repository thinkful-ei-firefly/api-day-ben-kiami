'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/ben-kiami';

  const getItems = function() {
    return fetch(BASE_URL + '/items');
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
    return fetch(BASE_URL + '/items/', options);
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
    return fetch(BASE_URL + '/items/' + id, options);
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
