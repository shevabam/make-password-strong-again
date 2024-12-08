export function createPasswordList(passwords) {
  const passwordElements = passwords.map((password, index) => `
    <div class="password-item">
      <span class="password-text">${password}</span>
      <button class="copy-icon" aria-label="Copy" data-index="${index}">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </button>
    </div>
  `).join('');

  return `
    <div class="password-list">
      ${passwordElements}
      <button class="copy-all" aria-label="Copy All">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </svg>
        Copy all passwords
      </button>
    </div>
  `;
}