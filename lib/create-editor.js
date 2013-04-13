'use strict';

module.exports = function createEditor(container, src, id) {
  var editorContainer = document.createElement('div');
  editorContainer.setAttribute('id', id);
  editorContainer.setAttribute('class', 'scriptie-talkie-editor');
  container.appendChild(editorContainer);

  var editor = ace.edit(id);
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/javascript");
  editor.$highlightActiveLine = false;
  editor.setValue(src);
  return { container: editorContainer, editor: editor };
};