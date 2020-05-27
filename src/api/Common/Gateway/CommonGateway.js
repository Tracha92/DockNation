const { exec } = require("child_process");

module.exports = {
    execShellCommand: function(cmd)
    {
        return new Promise((resolve, reject) => {
            exec(cmd, (error, stdout, stderr) => {
                if (error) {
                    console.warn(error);
                    reject(error);
                }
                resolve(stdout ? stdout : stderr);
            });
        });
    }
}
