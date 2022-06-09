import {addingTag} from "./adding-tag.js";
import {getRandomInt} from "./util.js";

const id = form.querySelector('#id');
const readonly = document.querySelector('#checkbox');
const RANDOM_MIN = 1;
const RANDOM_MAX = 100;

function NewObject(tags) {
  this.$id = getRandomInt(RANDOM_MIN, RANDOM_MAX);
  this.readonly = readonly.checked;

  const arr = [];
  tags.forEach((tag) => {
    arr.push(tag.textContent.slice(1));
  });
  this.tags = arr;
  return;
};

const editObject = (obj) => {
  id.value = obj.$id;
  obj.tags.forEach((tag) => {
    addingTag(tag);
  })
};

const deleteObject = (arr, id) => {
  const index = arr.findIndex((obj) => obj.$id === id);
  arr.splice(index, 1);
};

export {NewObject, editObject, deleteObject};
