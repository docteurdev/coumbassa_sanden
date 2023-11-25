
import {BaseApi} from "./BaseApi";
const TABLE = '/bientypes';
class BientypesApi extends BaseApi{

  constructor() {
    super();
  }

  static async get() {
    return await super.getApi(TABLE)
  }
  
  static async getId(id) {
    return await super.getId(TABLE, id)
  }

  static async search(params) {
    return await super.search(TABLE, params)
  }
  
  static async post(params) {
    return await super.post(TABLE, params)
  }

  static async postApi(params) {
    return await super.postApi(TABLE, params, true, true)
  }

  static async update(id, params) {
    return await super.update(TABLE, params)
  }

  static async delete(id) {
    return await super.delete(TABLE, id)
  }

}

export {BientypesApi};


