import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import {
  EditorState,
  ContentState,
  convertToRaw
} from 'draft-js';

export const htmlToDraftHelper = (value) => {
  const contentBlock = htmlToDraft(value);
  if (!contentBlock) {
    return '';
  }

  const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
  return EditorState.createWithContent(contentState);
};

export const parseHtmlToPlainText = (value) => {
  const currentContent = htmlToDraftHelper(value).getCurrentContent();
  return currentContent.getPlainText();
};

export const draftToHtmlHelper = (editorState) => {
  const stringifiedHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  // Conversion to html gives some weird values sometimes
  return stringifiedHtml.replace(/(\n)/g, '');
};
