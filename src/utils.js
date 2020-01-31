import content from './content.yml';

export default {
  range: (val, min, max) => Math.min(Math.max(min, val), max),
  mailTo: `mailto:${content.email}`,
  // converts input string to a valid DOM ID value
  toDomId: (input) => input.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, "").toLowerCase(),
};
