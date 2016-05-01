// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"test","outputs":[{"name":"","type":"string"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"str","type":"string"}],"name":"ee","type":"event"}],
    binary: "60606040526102ad806100126000396000f3606060405260e060020a6000350463f8a8fd6d811461001b575b005b6000606081815260c0604052600b6080527f48656c6c6f20576f726c6400000000000000000000000000000000000000000060a05281548280527f48656c6c6f20576f726c6400000000000000000000000000000000000000001683556100d89290610146907f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563602060026001841615610100026000190190931692909204601f01919091048101905b808211156101b4578381556001016100c5565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156101385780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b50602060c0908152815460026001821615610100908102600019019092160460e08190527fc11b84351f66b8fd9455bdbb023705bcb878f299de135193fabb6f4b884dfbe59392918291849080156101fc5780601f106101b8576101008083540402835291602001916101fc565b5090565b8201917f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56391505b8154815290600101906020018083116101df57829003601f168201915b50509250505060405180910390a160006000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102a35780601f10610278576101008083540402835291602001916102a3565b820191906000526020600020905b81548152906001019060200180831161028657829003601f168201915b505050505090509056",
    unlinked_binary: "60606040526102ad806100126000396000f3606060405260e060020a6000350463f8a8fd6d811461001b575b005b6000606081815260c0604052600b6080527f48656c6c6f20576f726c6400000000000000000000000000000000000000000060a05281548280527f48656c6c6f20576f726c6400000000000000000000000000000000000000001683556100d89290610146907f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563602060026001841615610100026000190190931692909204601f01919091048101905b808211156101b4578381556001016100c5565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156101385780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b50602060c0908152815460026001821615610100908102600019019092160460e08190527fc11b84351f66b8fd9455bdbb023705bcb878f299de135193fabb6f4b884dfbe59392918291849080156101fc5780601f106101b8576101008083540402835291602001916101fc565b5090565b8201917f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56391505b8154815290600101906020018083116101df57829003601f168201915b50509250505060405180910390a160006000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102a35780601f10610278576101008083540402835291602001916102a3565b820191906000526020600020905b81548152906001019060200180831161028657829003601f168201915b505050505090509056",
    address: "0xf196b3a82d0a39fc6dd85002f869e4513ffa7c45",
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