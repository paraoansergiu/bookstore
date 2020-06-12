import GenreModelGenerated from "./generated/GenreModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = GenreModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await GenreModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...GenreModelGenerated,
  ...customModel
};
