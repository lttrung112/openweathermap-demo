import apiVerification from '../../../util/api-verification'
import sendRequest from '../../../util/axios-request'

describe('Weather Search', function() {

  it('Should return a result with correct information',  () =>{
      const request = require('./request.data').default;
      const expectedData = require('./expected.data').default;

      const response = sendRequest(request) ;
      apiVerification.verify(expectedData, response.data);

  });
});

