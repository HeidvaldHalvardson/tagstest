import {deleteObject, editObject} from "./change-object.js";

const savingArea = document.querySelector('#saving-area');

const renderLocalStorage = (localStorage) => {
  savingArea.innerHTML = '';
  localStorage.forEach((elem) => {
    const ul = document.createElement('ul');
    ul.className = 'wrapper-saving-tag';

    elem.tags.forEach((tag) => {
      const li = document.createElement('li');
      li.className = 'saving-tag';
      li.textContent = `#${tag}`;
      ul.append(li);
    })

    const buttonClose = document.createElement('button');
    buttonClose.setAttribute('type', 'button');
    buttonClose.className = 'saving-tag-button-close';
    buttonClose.innerHTML = 'x';
    buttonClose.addEventListener('click', () => {
      deleteObject(localStorage, elem.$id)
      renderLocalStorage(localStorage);
    })

    const buttonEdit = document.createElement('button');
    buttonEdit.setAttribute('type', 'button');
    buttonEdit.className = 'saving-tag-button-edit';
    buttonEdit.addEventListener('click', () => {
      editObject(elem)
    })

    if (elem.readonly) {
      buttonEdit.setAttribute('disabled', 'disabled');
    }

    ul.append(buttonClose, buttonEdit);

    savingArea.prepend(ul);
  })
};

export {renderLocalStorage};
