const { exec, spawn } = require("child_process");

module.exports = {
    execShellCommand: (cmd) => {
        this.state = {
            error: false,
            data: ""
        }

        return new Promise((resolve, reject) => {
            exec(cmd, (error, stdout, stderr) => {
                if (stderr || stderr) {
                    this.state.error = true;
                }
                this.state.data = stdout ? stdout : stderr;
                resolve(this.state);
            });
        });
    },
    parseTemplate: (template) => {
        return JSON.stringify(JSON.stringify(template))
    }
}
