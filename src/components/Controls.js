export function createControls(state) {
  return `
    <div class="controls">
      <div class="control-group">
        <div class="slider-header">
          <span>Number of passwords</span>
          <span class="count-value">${state.count} passwords</span>
        </div>
        <input type="range" id="count" min="1" max="5" value="${state.count}" />
      </div>
      
      <div class="control-group">
        <div class="slider-header">
          <span>Password length</span>
          <span class="length-value">${state.length} characters</span>
        </div>
        <input type="range" id="length" min="8" max="128" value="${state.length}" />
      </div>

      <div class="options">
        <label class="toggle">
          <span class="toggle-label">Uppercase (A-Z)</span>
          <div class="toggle-wrapper">
            <input type="checkbox" id="uppercase" ${state.uppercase ? 'checked' : ''} />
            <div class="toggle-slider"></div>
          </div>
        </label>

        <label class="toggle">
          <span class="toggle-label">Lowercase (a-z)</span>
          <div class="toggle-wrapper">
            <input type="checkbox" id="lowercase" ${state.lowercase ? 'checked' : ''} />
            <div class="toggle-slider"></div>
          </div>
        </label>

        <label class="toggle">
          <span class="toggle-label">Numbers (0-9)</span>
          <div class="toggle-wrapper">
            <input type="checkbox" id="numbers" ${state.numbers ? 'checked' : ''} />
            <div class="toggle-slider"></div>
          </div>
        </label>

        <label class="toggle">
          <span class="toggle-label">Symbols (!@#$%^&*)</span>
          <div class="toggle-wrapper">
            <input type="checkbox" id="symbols" ${state.symbols ? 'checked' : ''} />
            <div class="toggle-slider"></div>
          </div>
        </label>

        <label class="toggle">
          <span class="toggle-label">Exclude ambiguous characters</span>
          <div class="toggle-wrapper">
            <input type="checkbox" id="excludeAmbiguous" ${state.excludeAmbiguous ? 'checked' : ''} />
            <div class="toggle-slider"></div>
          </div>
        </label>
      </div>

      <button id="generate" class="generate-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-cw w-5 h-5"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
        Generate Passwords
      </button>
    </div>
  `;
}