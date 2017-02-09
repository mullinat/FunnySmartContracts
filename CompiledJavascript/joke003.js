var joke003Contract = web3.eth.contract([{
    "constant": true,
    "inputs": [],
    "name": "punchline",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "joke",
    "outputs": [{
        "name": "",
        "type": "string"
    }],
    "payable": false,
    "type": "function"
}, {
    "payable": true,
    "type": "fallback"
}]);
var joke003 = joke003Contract.new({
    from: web3.eth.accounts[0],
    data: '0x6060604052606060405190810160405280602281526020017f77687920697320626974636f696e20646966666963756c747920736f2068696781526020017f683f00000000000000000000000000000000000000000000000000000000000081526020015060006000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100b257805160ff19168380011785556100e3565b828001600101855582156100e3579182015b828111156100e25782518260005055916020019190600101906100c4565b5b50905061010e91906100f0565b8082111561010a57600081815060009055506001016100f0565b5090565b5050604060405190810160405280601d81526020017f546f2066696e64206f75742067697665206d65203130302050436f696e00000081526020015060016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061019857805160ff19168380011785556101c9565b828001600101855582156101c9579182015b828111156101c85782518260005055916020019190600101906101aa565b5b5090506101f491906101d6565b808211156101f057600081815060009055506001016101d6565b5090565b5050610384806102046000396000f360606040523615610048576000357c01000000000000000000000000000000000000000000000000000000009004806377ea57d614610142578063981a074d146101c257610048565b6101405b60643410151561013d57604060405190810160405280600d81526020017f546f6f206d75636820686173680000000000000000000000000000000000000081526020015060016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100de57805160ff191683800117855561010f565b8280016001018555821561010f579182015b8281111561010e5782518260005055916020019190600101906100f0565b5b50905061013a919061011c565b80821115610136576000818150600090555060010161011c565b5090565b50505b5b565b005b34610002576101546004805050610242565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156101b45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34610002576101d460048050506102e3565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156102345780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60016000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102db5780601f106102b0576101008083540402835291602001916102db565b820191906000526020600020905b8154815290600101906020018083116102be57829003601f168201915b505050505081565b60006000508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561037c5780601f106103515761010080835404028352916020019161037c565b820191906000526020600020905b81548152906001019060200180831161035f57829003601f168201915b50505050508156',
    gas: '4700000'
}, function(e, contract) {
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
        console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
})