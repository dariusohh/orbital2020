import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
var app = "http://127.0.0.1:8000/"

describe('User Login', () => {
    it('Successful login with valid account', finish => {
        chai.request(app)
            .post('rest_auth/login/')
            .send({
                username:'testuser',
                password:'asd123123'
            })
            .end((error,response) => {
                response.should.have.status(200);
                finish();
            })
    })

    it('Login with wrong password', finish => {
        chai.request(app)
            .post('rest_auth/login/')
            .send({
                username:'testuser',
                password:'asd12312'
            })
            .end((error,response) => {
                response.should.have.status(400);
                finish();
            })
    })

    it('Login with non-existing username', finish => {
        chai.request(app)
            .post('rest_auth/login/')
            .send({
                username:'testuser444',
                password:'asd12312'
            })
            .end((error,response) => {
                response.should.have.status(400);
                finish();
            })
    })

    it('Login with missing username', finish => {
        chai.request(app)
            .post('rest_auth/login/')
            .send({
                username:'',
                password:'asd12312'
            })
            .end((error,response) => {
                response.should.have.status(400);
                finish();
            })
    })

    it('Login with missing password', finish => {
        chai.request(app)
            .post('rest_auth/login/')
            .send({
                username:'testuser',
                password:''
            })
            .end((error,response) => {
                response.should.have.status(400);
                finish();
            })
    })

})