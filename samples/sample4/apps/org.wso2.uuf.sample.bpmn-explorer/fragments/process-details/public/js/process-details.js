$(document).ready(function(){
    /*var deploymentList = [];

    $.ajax({
            type: 'GET',
            url : "https://localhost:9443/bpmn/repository/deployments",
            dataType: 'json',
            headers: {
                "Authorization": "Basic " + btoa("admin" + ":" + "admin")
            },
            success:function(data){
                deploymentList = data.data;
                $.each(deploymentList, function(i, data) {
            }
        });
    return deploymentList;

    getProcessDefinitions: function(deploymentId) {
        type: 'GET',
        url : "https://localhost:9443/bpmn/repository/process-definitions",
        dataType: 'json',
        headers: {
            "Authorization": "Basic " + btoa("admin" + ":" + "admin")
          },
        success:function(data){
                    $.each(data.data, function(i, data) {
                                    $("#process-view").find('tbody')
                                                    .append($('<tr>')
                                                        .append($('<td>')
                                                            .append(data.name + "-" + data.id)
                                                        )
                                                        .append($('<td>')
                                                            .append(data.name)
                                                        )
                                                        .append($('<td>')
                                                            .append(data.id)
                                                        )
                                                        .append($('<td>')
                                                            .append(data.version)
                                                        )
                                                    );
                                });
                    });
                },
                error: function( req, status, err ) {
                    console.log( 'something went wrong', status, err );
                    }

    });*/

    $.ajax({
            type: 'GET',
            url : "https://localhost:9443/bpmn/repository/process-definitions",
            dataType: 'json',
            headers: {
                "Authorization": "Basic " + btoa("admin" + ":" + "admin")
              },
            success:function(data){
                        $.each(data.data, function(i, data1) {
                                        $("#process-view").find('tbody')
                                                        .append($('<tr>')
                                                            .append($('<td>')
                                                                .append(data1.name + "-" + data1.id)
                                                            )
                                                            .append($('<td>')
                                                                .append(data1.name)
                                                            )
                                                            .append($('<td>')
                                                                .append(data1.id)
                                                            )
                                                            .append($('<td>')
                                                                .append(data1.version)
                                                            )
                                                        );
                        });
                    },
                    error: function( req, status, err ) {
                        console.log( 'something went wrong', status, err );
                        }

        });
});
