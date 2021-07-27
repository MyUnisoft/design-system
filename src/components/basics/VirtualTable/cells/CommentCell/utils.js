import ColorPicker from "../../../ColorPicker";

const toolbarOptions = {
  options: ['inline', 'list', 'colorPicker', 'link', 'emoji', 'history'],
  inline: {
    options: ['bold', 'italic', 'underline']
  },
  list: {
    options: ['unordered']
  },
  colorPicker: {
    component: ColorPicker
  }
};

const commentBoxInitialState = {
  body: '',
  attachTo: {}
};


export {
  toolbarOptions,
  commentBoxInitialState
};