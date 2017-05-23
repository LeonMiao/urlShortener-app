var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test List of Accounts result', function () {
//	this.timeout(15000);

	var requestResult;
	var response;
		 
    before(function (done) {
        chai.request("http://localhost:8080")
			.get("/app/account")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });
    
    it('Should return an array object with more than 1 object', function (){
		expect(response).to.have.status(200);
        expect(response.body).to.be.an.object;
		expect(response.body).to.have.length.above(2); //???
		expect(response).to.have.headers;
    });
    
	it('The first entry in the array has known properties', function(){
	    expect(requestResult[0]).to.include.keys('accountId');
	    expect(requestResult[0]).to.have.property('username');
		expect(response).to.have.deep.property('body[0].listId', 1);
		expect(response.body).to.not.be.a.string;
	});
	it('The elements in the array have the expecte properties', function(){
		expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
					expect(body[i]).to.have.property('fName').that.is.a('string');
					expect(body[i]).to.have.property('mName').that.is.a('string');
					expect(body[i]).to.have.property('lName').that.is.a('string');
   					expect(body[i]).to.have.property('emailAddr').that.is.a('string');
					expect(body[i]).to.have.property('phoneNum').that.is.a('string');
					expect(body[i]).to.have.property('userType').that.is.a('string');
					expect(body[i]).to.have.property('createDate').that.is.a('string');
				}
				return true;
			});
	});	
	
});