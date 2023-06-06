const execSync = require("child_process").execSync;

console.log(process.env);

const res = execSync("npm publish", {});
console.log(res.toString());
