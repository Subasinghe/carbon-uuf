function onRequest(context) {
    var s = callOSGiService("org.wso2.mbp.sample01.Service", "test", null);
    var a = JSON.parse(s);
    return {"data":a};
}
