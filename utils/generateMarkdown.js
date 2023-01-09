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
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const [option] = license
  if (!option) {
    return '';
  }  else if (option === 'EPL-1.0') {
    return `https://opensource.org/licenses/EPL-1.0`;
  } else if (option === 'CC0-1.0') {
    return `http://creativecommons.org/publicdomain/zero/1.0/`;
  } else if (option === 'MIT') {
    return `https://opensource.org/licenses/MIT`;
  } else if (option === 'apache-2.0') {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (option === 'ISC') {
    return `https://opensource.org/licenses/ISC`;
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `The license used for this project was ${license}. The link to more information about this license can be found at: `;
}
