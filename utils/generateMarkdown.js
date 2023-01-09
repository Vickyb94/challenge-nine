// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const [option] = license
  if (!option) {
    return '';
  } else if (option === 'EPL-1.0') {
    return `EPL%201.0-red.svg)`;
  } else if (option === 'CC0-1.0') {
    return `CC0%201.0-lightgrey.svg)`;
  } else if (option === 'MIT') {
    return `MIT.0-lightgrey.svg)`;
  } else if (option === 'apache-2.0') {
    return `Apache%202.0-blue.svg)`;
  } else if (option === 'ISC') {
    return `ISC-blue.svg)`;
  }
}
