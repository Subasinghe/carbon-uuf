/*function onRequest(context) {
    var s = callOSGiService("org.wso2.mbp.sample01.Service", "createProcessInstance", [context.app.config.bpsHost,context.app.config.bpsPort]);
    var a = JSON.parse(s);
    return {"data":a};
}*/
var onRequest = function (context) {
    print(context);
    return {"name": context.uriParams.id};
};
