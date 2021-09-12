const janken = (com, you) => {
	const result = ["あいこ", "勝ち", "負け"];

	// 0:グー 1:チョキ 2:パー
	const matrix = [
		[0, 1, 2],
		[2, 0, 1],
		[1, 2, 0]
	];

	return result[matrix[com][you]];
}

module.exports = { janken };