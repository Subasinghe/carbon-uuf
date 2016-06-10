function onRequest(context) {
    var s = callOSGiService("org.wso2.mbp.sample01.Service", "getProcessDetails", [context.app.config.bpsHost,context.app.config.bpsPort]);
    var a = JSON.parse(s);
    return {"data":a};
}
