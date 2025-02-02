const config = {
  /** CLI flag */
  templates: "./templates/defaults",
  /** CLI flag */
  generateResponses: false,
  /** CLI flag */
  defaultResponseAsSuccess: false,
  /** CLI flag */
  generateRouteTypes: false,
  /** CLI flag */
  generateClient: true,
  /** CLI flag */
  generateUnionEnums: false,
  /** parsed swagger schema from getSwaggerObject() */

  /** parsed swagger schema ref */
  swaggerSchema: null,
  /** original (converted to json) swagger schema ref */
  originalSchema: null,

  /** { "#/components/schemas/Foo": @TypeInfo, ... } */
  componentsMap: {},
  /** flag for catching convertion from swagger 2.0 */
  convertedFromSwagger2: false,

  /** url index from paths used for merging into modules */
  moduleNameIndex: 0,
};

/** needs to use data everywhere in project */
module.exports = {
  addToConfig: (configParts) => Object.assign(config, configParts),
  config,
};
