import content from './content.yml';

export default {
  range: (val, min, max) => Math.min(Math.max(min, val), max),
  mailTo: `mailto:${content.email}`,
};
