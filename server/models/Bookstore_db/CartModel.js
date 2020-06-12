import CartModelGenerated from "./generated/CartModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = CartModelGenerated.init();
  
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
      return await CartModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CartModelGenerated,
  ...customModel
};
