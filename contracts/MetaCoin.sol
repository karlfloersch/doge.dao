// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract MetaCoin {
  string t;
  event ee(string str);
  
  function test() constant returns(string){
    /* bytes32 x = "Hello, World!"; */
    /* return x; */
    t = "Hello World";
    ee(t);
    return t;
  }
}
