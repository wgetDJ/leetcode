// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/


var maxProfit = function(prices) {
    let buy = prices[0]
    let sell = 0
    let profit = 0

    for(i = 1; i <= prices.length - 1; i++) {
        sell = prices[i]
        if(sell - buy < 0) {
            buy = prices[i]
        } else {
            profit = Math.max(profit, (sell - buy))
        }
    }

    return profit
};