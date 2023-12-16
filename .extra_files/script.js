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

        //Studies
        document.getElementById('studies_title').textContent = `${datos.studies.studies_title}`;

        document.getElementById('year_studies1').textContent = `${datos.studies.year_studies1}`;
        document.getElementById('title_studies1').textContent = `${datos.studies.title_studies1}`;
        document.getElementById('institution_studies1').textContent = `${datos.studies.institution_studies1}`;
        document.getElementById('studies1_link').href = datos.studies.studies1_link

        document.getElementById('year_studies2').textContent = `${datos.studies.year_studies2}`;
        document.getElementById('title_studies2').textContent = `${datos.studies.title_studies2}`;
        document.getElementById('institution_studies2').textContent = `${datos.studies.institution_studies2}`;
        document.getElementById('studies2_link').href = datos.studies.studies2_link

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