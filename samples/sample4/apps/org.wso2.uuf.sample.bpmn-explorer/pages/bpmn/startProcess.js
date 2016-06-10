function onRequest(context) {
    var s = callOSGiService("org.wso2.mbp.sample01.Service", "createProcessInstance", [context.request.queryString, context.app.config.bpsHost,context.app.config.bpsPort]);
    var a = JSON.parse(s);
    /*var a = {
      "error-message": "Cannot find process definition with id receiveTaskTest:1:1504"
    };*/
    return a;
}
