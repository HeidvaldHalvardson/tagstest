import {renderLocalStorage} from './render.js';
import {onSaveTagsList} from './form.js';
import './form.js';

const buttonSave = document.querySelector('#save-button');

const localStorage = [
  {
    $id: 1,
    readonly: true,
    tags: ['tag1', 'tag2'],
  },
  {
    $id: 2,
    readonly: false,
    tags: ['tag3', 'tag4'],
  }
];

document.addEventListener('DOMContentLoader', renderLocalStorage(localStorage));

buttonSave.addEventListener('click', (evt) => {
  evt.preventDefault();
  onSaveTagsList(localStorage);
  console.log(localStorage)
});
