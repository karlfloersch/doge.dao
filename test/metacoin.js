contract('MetaCoin', function(accounts) {
  it("should print string", function(done) {
    var meta = MetaCoin.deployed();

    meta.test().then(function(x) {

      console.log("This is a string");
      console.log(x);
      // console.log(web3.toAscii(x));
    }).then(done).catch(done);
  });
});
