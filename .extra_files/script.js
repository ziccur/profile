fetch('../config/config.ini')
    .then(response => response.text())
    .then(iniData => {
    const datos = parseINIString(iniData);

        // Personal data
        document.getElementById('name').textContent = `${datos.personal_data.name}`;
        document.getElementById('grade').textContent = `${datos.personal_data.grade}`;
        document.getElementById('location').textContent = `${datos.personal_data.location}`;
        document.getElementById('profile_photo').src = datos.personal_data.profile_photo;

        //Section 1
        document.getElementById('title1').textContent = `${datos.section1.title1}`;
        document.getElementById('title1_description').textContent = `${datos.section1.title1_description}`;

        //Colors
        document.documentElement.style.setProperty('--color-separator', datos.colors.separator_color);
        document.documentElement.style.setProperty('--background_content', datos.colors.background_content_color)
    
    })
      .catch(error => console.error('Error loading INI file:', error));

function parseINIString(data) {
  const result = {};
  let currentSection = null;

  data.split(/\r?\n/).forEach(line => {
    line = line.trim();
    if (!line || line.startsWith(';')) {
      return;
    }

    if (line.startsWith('[') && line.endsWith(']')) {
      currentSection = line.substring(1, line.length - 1);
      result[currentSection] = {};
    } else {
      const [key, value] = line.split('=').map(part => part.trim());
      result[currentSection][key] = value;
    }
  });
  return result;
}