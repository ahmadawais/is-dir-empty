const del = require("del");
const test = require("ava");
const touch = require("touch");
const makeDir = require("make-dir");
const isDirEmpty = require("./index.js");

(async () => {
	await makeDir(`./empty`);
	await makeDir(`./not-empty`);
	await touch(`./not-empty/file.md`);

	test("Should be empty", async t => {
		const empty = await isDirEmpty(`./empty`);
		t.is(empty, true);
	});

	test("Should be not empty", async t => {
		const notEmpty = await isDirEmpty(`./not-empty`);
		t.is(notEmpty, false);
	});

	await del([`./empty`, `./not-empty/file.md`, `./not-empty`]);
})();
