var onRequest = function (context) {
    print(context);
    return {"name": context.pathParams['id']};
};
