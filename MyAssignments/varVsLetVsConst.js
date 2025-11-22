console.log("The globel browser version is "+ browserVersion) ;
getBrowserVersion()
const browserVersion = "Chrome" //given Globel and only can be defined
function getBrowserVersion() {
    var browserVersion = "Chrome" //var is a function block scoped
    console.log("The browser version outside if block and inside function is "+ browserVersion) ;
    if (browserVersion=="Chrome") {
        let browserVersion = "Chrome" //let is a condition block scoped
       console.log("The browser version inside if block is "+ browserVersion) ;
    }
}

