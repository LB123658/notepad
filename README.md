# Notepad
A digital notepad
```js
//embed a notepad 
function loadNotepadEmbed(elementToEmbedNotepadIn,embedMargin,embedWidth) {
  var notepadEmbed = document.createElement("iframe");
  notepadEmbed.style.width = embedWidth;
  notepadEmbed.style.height = "360px";
  notepadEmbed.style.margin = embedMargin;
  notepadEmbed.style.border = "none";
  notepadEmbed.style.borderRadius = "5px;
  //element id is "notepad-embed"
  notepadEmbed.id = "notepad-embed";
  //embed notepad in selected element
  elementToEmbedNotepadIn.appendChild(notepadEmbed);
}
```
