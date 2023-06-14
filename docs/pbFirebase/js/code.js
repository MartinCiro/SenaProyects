export function generateInputHTML(id, label, type) {
    return `
      <label for="${id}">${label}:</label>
      <input type="${type}" id="${id}" required></input>
      <br>
    `;
  }  