function updateTitle(title: string): void {
  const titleElement = document.querySelector("title");
  if (titleElement) {
    titleElement.textContent = title;
  }
}

export default updateTitle;
// This module provides functions to update the document title based on a key from the TITLES object.
