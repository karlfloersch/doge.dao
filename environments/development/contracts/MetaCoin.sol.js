// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"test","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "6060604052600160a060020a0332166000908152602081905260409020612710905561016d8061002f6000396000f3606060405260e060020a60003504637bd703e8811461003c57806390b98a1114610067578063f8a8fd6d14610096578063f8b2cb4f146100ca575b005b6100b8600435600073706b38900ba1f94f51222c83e9e6be1bea7fa52c6396e4ee3d610128846100d1565b6100b860043560243533600160a060020a0316600090815260208190526040812054829010156100f057610122565b7f77686174207768617400000000000000000000000000000000000000000000005b60408051918252519081900360200190f35b6100b86004355b600160a060020a0381166000908152602081905260409020545b919050565b5033600160a060020a039081166000908152602081905260408082208054859003905591841681522080548201905560015b92915050565b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f4156100025750506040515191506100eb905056",
    unlinked_binary: "6060604052600160a060020a0332166000908152602081905260409020612710905561016d8061002f6000396000f3606060405260e060020a60003504637bd703e8811461003c57806390b98a1114610067578063f8a8fd6d14610096578063f8b2cb4f146100ca575b005b6100b8600435600073__ConvertLib____________________________6396e4ee3d610128846100d1565b6100b860043560243533600160a060020a0316600090815260208190526040812054829010156100f057610122565b7f77686174207768617400000000000000000000000000000000000000000000005b60408051918252519081900360200190f35b6100b86004355b600160a060020a0381166000908152602081905260409020545b919050565b5033600160a060020a039081166000908152602081905260408082208054859003905591841681522080548201905560015b92915050565b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f4156100025750506040515191506100eb905056",
    address: "0x0f9e68b1afc8224c657a506ae05f73a7057965bf",
    generated_with: "2.0.6",
    contract_name: "MetaCoin"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.MetaCoin = Contract;
  }

})();
