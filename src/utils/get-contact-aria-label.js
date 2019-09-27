// @flow
const getContactAriaLabel = (name: string, contact: string) => {
  let ariaLabel;

  switch (name) {
    case 'twitter':
      ariaLabel = `Follow me on twitter: @${contact}`;
      break;
    case 'github':
      ariaLabel = 'View my GitHub projects and contributions';
      break;
    case 'devto':
      ariaLabel = 'Find me on the Dev.to community';
      break;
    case 'stackoverflow':
      ariaLabel = 'Reach me at StackOverflow';
      break;
    case 'key':
      ariaLabel = 'Public PGP Key';
      break;
    case 'email':
      ariaLabel = 'My contact email';
      break;
    default:
      ariaLabel = 'Contact me';
      break;
  }

  return ariaLabel;
};

export default getContactAriaLabel;
