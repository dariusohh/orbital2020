import chai from 'chai';
import chaiHttp from 'chat-http';
import app from '../src'

chai.use(chaiHttp);
const expect = chai.expect;

describe('User Register', () => {
    it('Signup with no duplicate', finish => {
        chai.request(app)
            .post('rest_auth/register/')
            .send({
                name:'testuser',
                email:'testemail@gmail.com',
                password:'asd123123',
                confirm:'asd123123'
            })
            .end((error,response) => {
                response.should.have.status(200);
                finish();
            })
    })




})