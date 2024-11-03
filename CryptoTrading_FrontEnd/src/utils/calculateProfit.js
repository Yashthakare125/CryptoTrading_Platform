export const calculateProfit = (order) => {
	if (order && order.orderItem?.buyPrice && order.orderItem?.sellPrice) {
		let profit = (order.orderItem.sellPrice - order.orderItem.buyPrice).toFixed(2);
		return `$ ${profit}`;
	}
	return "-";
}