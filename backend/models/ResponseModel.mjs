export default class ResponseModel {
    constructor({ statusCode = 200, message = '', data = null, error = null } = {}) {
      this.success = false;
      this.statusCode = statusCode;
      if (statusCode >= 200 && statusCode <= 299) this.success = true;
      if(message !== '') this.message = message;
      if(data) this.data = data
      if(error) this.error = error;
    }
    static get(message, data){
        return new ResponseModel({statusCode: 200, message: message, data: data})
    }
    static post(message, data){
        return new ResponseModel({statusCode: 201, message: message, data: data})
    }
    static error(code, message, error){
        return new ResponseModel({statusCode: code, message: message, error: error})
    }
  }