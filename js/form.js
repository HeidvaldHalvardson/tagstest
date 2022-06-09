import {isEnterKey} from "./util.js";
import {addingTag} from "./adding-tag.js";
import {renderLocalStorage} from "./render.js";
import {NewObject} from "./change-object.js";

const form = document.querySelector('#form');
const input = form.querySelector('#input');
const id = form.querySelector('#id');
const readonly = document.querySelector('#checkbox');
const buttonAdd = form.querySelector('#button-add');

const onClickHandler = () => {
  if (input.value !== '') {
    addingTag(input.value);
  }
  input.value = '';
};

buttonAdd.addEventListener('click', (evt) => {
  onClickHandler(evt);
});

input.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    onClickHandler();
  }
})

const onSaveTagsList = (localStorage) => {
  const editList = form.querySelector('.edit-list');
  const tags = editList.querySelectorAll('.tag-name');
  if (tags.length > 0) {
    editList.innerHTML = '';
    if (id.value === '') {
      const newTags = new NewObject(tags);
      localStorage.push(newTags);
    } else {
      const editTags = localStorage.find((elem) => elem.$id == id.value);
      editTags.readonly = readonly.checked;
      editTags.tags = [];
      tags.forEach((tag) => {
        editTags.tags.push(tag.textContent.slice(1));
      });
      id.value = '';
    }
    readonly.checked = false;
    renderLocalStorage(localStorage);
  }
}

export {onSaveTagsList};
