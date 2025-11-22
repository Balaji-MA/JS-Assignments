let browserName =String()
let testType = String()
function launchBrowser(browserName) {
    if (browserName=="Chrome") {
        console.log("The browser launched is " + browserName);
    } else {
        console.log("The browser launched is " + browserName);
    }
}
function runTests(testType) {
    switch (testType) {
        case "sanity":
            console.log("The Testing type is "+testType+" Testing");
            break;
        case "regression":
            console.log("The Testing type is "+testType+" Testing");
            break;
    default:
            console.log("The Testing type is 'Smoke' Testing");
            break;
    }
}
launchBrowser("Chrome") //Give value = Otherwise OR Chrome
runTests("sanity") //sGive value = smoke OR sanity OR regression