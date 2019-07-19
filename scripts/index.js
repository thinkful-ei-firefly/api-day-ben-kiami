'use strict';
/* global shoppingList, store, Item, api, $ */
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api
    .getItems()
    .then(res => {if (!res.ok)
    throw new Error(res.status);
  } return res.json();
})
    .then(items => {
      items.forEach(item => store.addItem(item));
      shoppingList.render();
    });
    .catch(error => shoppingList.showErrorMessage(error.message));
});
