const { defineConfig } = require("cypress");
const installLogsPrinter = require("cypress-terminal-report/src/installLogsPrinter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const logsPrinterOptions = {
        outputRoot: config.projectRoot,
        outputTarget: {
          "cypress-logs|json": "json",
        },
        specRoot: "cypress/e2e",
        printLogsToFile: "onFail",
      };
      installLogsPrinter(on, logsPrinterOptions);
    },
  },
});
