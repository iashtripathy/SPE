const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);


//////////////////////////////////////////Test case -1///////////////////////////////////////////////

describe('/ home route', () => {
  it('it should check the home page', (done) => {
    chai.request(server)
        .get('/')
        .end((err, res) => {
              res.should.have.status(200);
          done();
        });
  });
});

//////////////////////////////////////////Test case-2//////////////////////////////////////////////////

describe('/ adoption route', () => {
    it('it should check the adoption page', (done) => {
      chai.request(server)
          .get('/adoption')
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
  });


  ////////////////////////////////////////Test case-3//////////////////////////////////////////////////

  describe('/ report-homeless route', () => {
    it('it should Report Homeless People route', (done) => {
      chai.request(server)
          .get('/report-homeless')
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
  });

  ////////////////////////////////////////Test case-4////////////////////////////////////////////////////

  describe('/ donation route', () => {
    it('it should check the donation page', (done) => {
      chai.request(server)
          .get('/donation')
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
  });


    ////////////////////////////////////////Test case-5////////////////////////////////////////////////////

    describe('/ Admin Login route', () => {
      it('It checks Admin Login page', (done) => {
        chai.request(server)
            .get('/admin-login')
            .end((err, res) => {
                  res.should.have.status(200);
              done();
            });
      });
    });



  ////////////////////////////////////////Test case-6////////////////////////////////////////////////////

/*   describe('/ Homeless Persons Data route', () => {
    it('It checks the homeless persons data page', (done) => {
      chai.request(server)
          .get('/homeless-persons-data')
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
  }); */


  ////////////////////////////////////////Test case-7////////////////////////////////////////////////////

/*   describe('/ Meeting route', () => {
    it('It checks all the meetings page', (done) => {
      chai.request(server)
          .get('/meeting-data')
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
  });   */


  ////////////////////////////////////////Test case-8////////////////////////////////////////////////////

  describe('/ Admin Logout route', () => {
    it('It checks admin Logout', (done) => {
      chai.request(server)
          .get('/admin-logout')
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
  });  