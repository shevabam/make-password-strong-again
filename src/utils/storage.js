export function savePreferences(preferences) {
  localStorage.setItem('makepasswordgreatagain', JSON.stringify(preferences));
}

export function loadPreferences() {
  const defaultPrefs = {
    length: 16,
    count: 1,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
    excludeAmbiguous: true,
  };

  const savedPrefs = localStorage.getItem('makepasswordgreatagain');
  return savedPrefs ? JSON.parse(savedPrefs) : defaultPrefs;
}