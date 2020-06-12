import AuthorModelGenerated from "./generated/AuthorModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = AuthorModelGenerated.init();
  
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
      return await AuthorModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...AuthorModelGenerated,
  ...customModel
};
