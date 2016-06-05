//noinspection JSUnusedGlobalSymbols
var onRequest = function (context) {
print(context.uriParams);
print(JSON.stringify(context.uriParams));

    return {"name": context.uriParams.id, "tags": ['white', 'short-hair']};
};