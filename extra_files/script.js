fetch('../config/config.json')
  .then(response => response.json())
  .then(data => {
    // Acceder a un valor en el objeto de datos


// Personal data
  document.getElementById('name').textContent = data.personal_data.name;
  document.getElementById('grade').textContent = data.personal_data.grade;
  document.getElementById('location').textContent = data.personal_data.location;
  document.getElementById('profile_photo').src = data.personal_data.profile_photo;

  //Section 1
  document.getElementById('title1').textContent = data.section1.title1;
  document.getElementById('title1_description').textContent = data.section1.title1_description;

  //Studies
  document.getElementById('studies_title').textContent = data.studies.studies_title;

  document.getElementById('year_studies1').textContent = data.studies.year_studies1;
  document.getElementById('title_studies1').textContent = data.studies.title_studies1;
  document.getElementById('institution_studies1').textContent = data.studies.institution_studies1;
  document.getElementById('studies1_link').href = datos.studies.studies1_link

  document.getElementById('year_studies2').textContent = data.studies.year_studies2;
  document.getElementById('title_studies2').textContent = data.studies.title_studies2;
  document.getElementById('institution_studies2').textContent = data.studies.institution_studies2;
  document.getElementById('studies2_link').href = datos.studies.studies2_link

  //Colors
  document.documentElement.style.setProperty('--color-separator', datos.colors.separator_color);
  document.documentElement.style.setProperty('--background_content', datos.colors.background_content_color)

})
.catch(error => console.error('Error loading JSON file:', error));

    

    