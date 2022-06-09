const editTemplate = document.querySelector('#edit-item')
  .content.querySelector('.edit-item');
const editList = document.querySelector('.edit-list');

const addingTag = (value) => {
  const editItem = editTemplate.cloneNode(true);
  editItem.querySelector('.tag-name').textContent = `#${value}`;
  editItem.querySelector('.tag-button').addEventListener('click', () => {
    editItem.remove();
  })
  editList.appendChild(editItem);
};

export {addingTag};
