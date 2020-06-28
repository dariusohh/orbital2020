import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();
var app = "http://127.0.0.1:8000/"

describe('User Register', () => {
    it('Successful signup', finish => {
        chai.request(app)
            .post('rest_auth/register/')
            .send({
                username:'tester33',
                email:'tester33@gmail.com',
                password1:'123123123',
                password2:'123123123'
            })
            .end((error,response) => {
                response.should.have.status(201);
                finish();
            })
    })

    it('Sign up with same username', finish => {
        chai.request(app)
            .post('rest_auth/register/')
            .send({
                username:'tester33',
                email:'tester6@gmail.com',
                password1:'123123123',
                password2:'123123123'
            })
            .end((error,response) => {
                response.should.have.status(400);
                finish();
            })
    })

    it('Sign up with same email', finish => {
        chai.request(app)
            .post('rest_auth/register/')
            .send({
                username:'tester6',
                email:'tester33@gmail.com',
                password1:'123123123',
                password2:'123123123'
            })
            .end((error,response) => {
                response.should.have.status(400);
                finish();
            })
    })

    it('Signup with password length smaller than 8', finish => {
        chai.request(app)
            .post('rest_auth/register/')
            .send({
                username:'tester6',
                email:'tester6@gmail.com',
                password1:'1231231',
                password2:'1231231'
            })
            .end((error,response) => {
                response.should.have.status(400);
                finish();
            })
    })

    it('Signup with password not matching', finish => {
        chai.request(app)
            .post('rest_auth/register/')
            .send({
                username:'tester6',
                email:'tester6@gmail.com',
                password1:'123123123',
                password2:'12312312'
            })
            .end((error,response) => {
                response.should.have.status(400);
                finish();
            })
    })

    it('Signup with username missing', finish => {
        chai.request(app)
            .post('rest_auth/register/')
            .send({
                username:'',
                email:'tester6@gmail.com',
                password1:'123123123',
                password2:'123123123'
            })
            .end((error,response) => {
                response.should.have.status(400);
                finish();
            })
    })
})