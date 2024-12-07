import { generatePassword } from './src/utils/passwordGenerator.js';
import { savePreferences, loadPreferences } from './src/utils/storage.js';
import { copyToClipboard } from './src/utils/clipboard.js';
import { pluralize } from './src/utils/utils.js';
import { createControls } from './src/components/Controls.js';
import { createPasswordList } from './src/components/PasswordList.js';

let state = loadPreferences();
let passwords = [];

function generatePasswords() {
  const generateButton = document.getElementById('generate');
  generateButton.classList.add('generating');
  
  // Small delay to show the animation
  setTimeout(() => {
    passwords = Array(state.count).fill(0).map(() => 
      generatePassword(state.length, {
        uppercase: state.uppercase,
        lowercase: state.lowercase,
        numbers: state.numbers,
        symbols: state.symbols,
        excludeAmbiguous: state.excludeAmbiguous
      })
    );
    
    document.querySelector('.password-list').innerHTML = createPasswordList(passwords);
    generateButton.classList.remove('generating');
  }, 200);
}

function setupEventListeners() {
  document.getElementById('length').addEventListener('input', (e) => {
    state.length = parseInt(e.target.value);
    document.querySelector('.length-value').textContent = `${state.length} ${pluralize('character', state.length)}`;
    savePreferences(state);
  });

  document.getElementById('count').addEventListener('input', (e) => {
    state.count = parseInt(e.target.value);
    document.querySelector('.count-value').textContent = `${state.count} ${pluralize('password', state.count)}`;
    savePreferences(state);
  });

  ['uppercase', 'lowercase', 'numbers', 'symbols', 'excludeAmbiguous'].forEach(option => {
    document.getElementById(option).addEventListener('change', (e) => {
      state[option] = e.target.checked;
      savePreferences(state);
    });
  });

  document.getElementById('generate').addEventListener('click', generatePasswords);

  document.addEventListener('click', async (e) => {
    if (e.target.closest('.copy-icon')) {
      const index = parseInt(e.target.closest('.copy-icon').dataset.index);
      await copyToClipboard(passwords[index]);
      const button = e.target.closest('.copy-icon');
      button.innerHTML = `
        <svg class="checkmark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
      `;
      button.classList.add('copied');
      setTimeout(() => {
        button.classList.remove('copied');
        button.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        `;
      }, 1500);
    }

    if (e.target.closest('.copy-all')) {
      await copyToClipboard(passwords.join('\n'));
      const button = e.target.closest('.copy-all');
      button.classList.add('copied');
      setTimeout(() => button.classList.remove('copied'), 1500);
    }
  });
}

function initializeApp() {
  const app = document.querySelector('#app');
  app.querySelector('.left-panel').innerHTML = createControls(state);
  app.querySelector('.right-panel').innerHTML = createPasswordList(passwords);

  setupEventListeners();
  generatePasswords();
}

initializeApp();