// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {


    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var CoinsNomination = {};
    if (currency < 0) {
    	return {};
    } else
    if (currency > 10000) {
    	return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    var H = Math.floor(currency / 50);
    	if (H > 0) {
    		CoinsNomination.H = H;
    	}
    	remainderAfterH = currency % 50;
    var Q = Math.floor(remainderAfterH / 25);
    	if (Q > 0) {
    		CoinsNomination.Q = Q;
    	}
    	remainderAfterQ = remainderAfterH % 25;

    var D = Math.floor(remainderAfterQ / 10);
    	if (D > 0) {
    		CoinsNomination.D = D;
    	}
    	remainderAfterD = remainderAfterQ % 10;

    var N = Math.floor(remainderAfterD / 5);
    	if (N > 0) {
    		CoinsNomination.N = N;
    	}
    	remainderAfterN = remainderAfterD % 5;
    var P = remainderAfterN;
    	if (P > 0) {
    		CoinsNomination.P = P;
    	}

    return CoinsNomination;


}
