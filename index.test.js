const { janken } = require('./index.js');

describe("じゃんけんのテスト", () => {
	test("あいこパターン", () => {
		expect(janken(0, 0)).toBe("あいこ");
		expect(janken(1, 1)).toBe("あいこ");
		expect(janken(2, 2)).toBe("あいこ");
	});

	test("勝ちパターン", () => {
		expect(janken(0, 1)).toBe("勝ち");
		expect(janken(1, 2)).toBe("勝ち");
		expect(janken(2, 0)).toBe("勝ち");
	});

	test("負けパターン", () => {
		expect(janken(0, 2)).toBe("負け");
		expect(janken(1, 0)).toBe("負け");
		expect(janken(2, 1)).toBe("負け");
	});
});