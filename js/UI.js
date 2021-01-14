/*jshint multistr: true */
var UI = {
    //成功提示
    success: function (params, event, time) {
        icon = 'check-square-o';
        if (typeof params === 'object') {
            msg = params.msg;
            if (msg === undefined || msg == '') {
                msg = 'Success';
            }
            time = params.time;
            if (time === undefined || time == '') {
                time = 1500;
            }
            icon = params.icon;
            if (icon == 1) {
                icon = 'check-circle-o';
            } else if (icon == 2) {
                icon = 'check-circle';
            } else if (icon == 3 || icon == undefined || icon == '') {
                icon = 'check-square-o';
            } else if (icon == 4) {
                icon = 'check-square';
            } else {
                icon = 'check-square-o';
            }
        } else if (typeof params === 'string') {
            if (params === undefined || params == '') {
                params = 'Success';
            }
            if (time === undefined || time == '') {
                time = 1500;
            }
            msg = params;
        }
        var html = '<div class="modal fade" id="successModal">\
            <div class="modal-dialog" style="width: 240px;">\
                <div class="modal-content" style="text-align: center;border: none;">\
                    <div class="modal-header-centered" style="margin-top: 5px;">\
                        <i class="fa fa-'+ icon + ' fa-2x"></i><br>\
                        <h6>'+ msg + '</h6>\
                    </div>\
                    <div class="dropdown-divider"></div>\
                    <div class="modal-footer-centered" style="margin-bottom: 5px;">\
                        <button type="button" class="btn btn-info btn-sm" data-dismiss="modal">确定</button>\
                    </div>\
                </div>\
            </div>\
        </div>';
        $('body').append(html);
        $('#successModal').modal('show');
        setTimeout(function () {
            $('#successModal').modal('hide');
        }, time);
        if (event) {
            $('#successModal').on('hidden.bs.modal', function () {
                event();
            });
        }

    },

    //Toast提示框
    toast: function (params, event, time) {
        if (typeof params === 'object') {
            msg = params.msg;
            if (msg === undefined || msg == '') {
                msg = 'Success';
            }
            time = params.time;
            if (time === undefined || time == '') {
                time = 1500;
            }
        } else if (typeof params === 'string') {
            if (params === undefined || params == '') {
                params = 'Success';
            }
            msg = params;
            if (time === undefined || time == '') {
                time = 1500;
            }
        }
        var html = '<div class="d-flex justify-content-center align-items-center" style="min-height: 200px; margin-top: 20%;">\
                        <div class="toast" id="myToast">\
                            <div class="toast-body">\
                                '+ msg + '\
                            </div>\
                        </div>\
                    </div>';
        $('body').append(html);
        $('#myToast').toast({
            autohide: false
        });
        $('#myToast').toast('show');
        setTimeout(function () {
            $('#myToast').toast('hide');
        }, time);
        if (event) {
            $('#myToast').on('hidden.bs.toast', function () {
                event();
            });
        }
    },

    //警告
    warning: function (params, event, time) {
        icon = 'fa-exclamation-triangle';
        if (typeof params === 'object') {
            msg = params.msg;
            if (msg === undefined || msg == '') {
                msg = 'Warning';
            }
            time = params.time;
            if (time === undefined || time == '') {
                time = 1500;
            }
            icon = params.icon;
            if (icon == 1) {
                icon = 'fa-exclamation-circle';
            } else if (icon == 2 || icon == undefined || icon == '') {
                icon = 'fa-exclamation-triangle';
            } else {
                icon = 'fa-exclamation-triangle';
            }
        } else if (typeof params === 'string') {
            if (params === undefined || params == '') {
                params = 'Warning';
            }
            if (time === undefined || time == '') {
                time = 1500;
            }
            msg = params;
        }
        var html = '<div class="modal fade" id="waringModal">\
                    <div class="modal-dialog" style="width: 240px;">\
                        <div class="modal-content" style="text-align: center;">\
                            <div class="modal-header-centered" style="margin-top: 5px;">\
                                <i class="fa '+ icon + ' fa-2x"></i><br>\
                                <span>'+ msg + '</span>\
                            </div>\
                            <div class="dropdown-divider"></div>\
                        </div>\
                    </div>\
                </div>';
        $('body').append(html);
        $('#waringModal').modal('show');
        setTimeout(function () {
            $('#waringModal').modal('hide');
        }, time);
        if (event) {
            $('#waringModal').on('hidden.bs.modal', function () {
                event();
            });
        }
    },

    //错误提示
    fail: function (params, event, time) {
        icon = 'fa-times-circle';
        if (typeof params === 'object') {
            msg = params.msg;
            if (msg === undefined || msg == '') {
                msg = 'Warning';
            }
            time = params.time;
            if (time === undefined || time == '') {
                time = 1500;
            }
            icon = params.icon;
            if (icon == 1) {
                icon = 'fa-times-circle-o';
            } else if (icon == 2 || icon == undefined || icon == '') {
                icon = 'fa-times-circle';
            } else {
                icon = 'fa-times-circle';
            }
        } else if (typeof params === 'string') {
            if (params === undefined || params == '') {
                params = 'Warning';
            }
            if (time === undefined || time == '') {
                time = 1500;
            }
            msg = params;
        }
        var html = '<div class="modal fade" id="failModal">\
            <div class="modal-dialog" style="width: 240px;">\
                <div class="modal-content" style="text-align: center;">\
                    <div class="modal-header-centered" style="margin-top: 5px;">\
                        <i class="fa '+ icon + ' fa-2x"></i><br>\
                        <span>'+ msg + '</span>\
                    </div>\
                    <div class="dropdown-divider"></div>\
                    <div class="modal-footer-centered" style="margin-bottom: 5px;">\
                        <button type="button" style="text-align: center;" class="btn btn-danger btn-sm" data-dismiss="modal">确定</button>\
                    </div>\
                </div>\
            </div>\
        </div>';

        $('body').append(html);
        $('#failModal').modal('show');
        setTimeout(function () {
            $('#failModal').modal('hide');
        }, time);
        if (event) {
            $('#failModal').on('hidden.bs.modal', function () {
                event();
            });
        }
    },


    //询问
    ask: function (params, event_fix, event_cancle) {
        title = params.title;
        if (title === undefined || title == '') {
            title = 'Tips';
        }
        msg = params.msg;
        if (msg === undefined || msg == '') {
            msg = 'Are you sure';
        }
        var html = '<div class="modal fade" id="askModal">\
                        <div class="modal-dialog" style="width: 300px;">\
                            <div class="modal-content">\
                                <div class="modal-header">\
                                    <h5 class="modal-title" id="exampleModalLabel">'+ title + '</h5>\
                                    <i class="fa fa-close" data-dismiss="modal"></i>\
                                </div>\
                                <div class="modal-body">\
                                    <i class="fa fa-question fa-2x"></i>&nbsp;&nbsp;&nbsp;' + msg + '\
                                </div>\
                                <div class="modal-footer">\
                                    <button type="button" id="cancle" class="btn btn-secondary" data-dismiss="modal">取消</button>\
                                    <button type="button" id="fix" class="btn btn-primary" data-dismiss="modal">确定</button>\
                                </div>\
                            </div>\
                        </div>\
                    </div>';
        $('body').append(html);
        $('#askModal').modal('show');

        if (event_fix) {
            $("#fix").on('click', function () {
                $('#askModal').modal('hide');
                event_fix();
            });
        }
        if (event_cancle) {
            $("#cancle").on('click', function () {
                $('#askModal').modal('hide');
                event_cancle();
            });
        }
    },

    //Alert 提示
    alert: function (msg, type, time) {
        switch (type) {
            case type = 'success':
                type = 'success';
                icon = 'check-circle';
                break;
            case type = 'warn':
                type = 'warning';
                icon = 'exclamation-circle';
                break;
            case type = 'fail':
                type = 'danger';
                icon = 'window-close';
                break;
            default:
                type = 'info';
                icon = 'fire';
                break;
        }
        if (msg === undefined || msg == '') {
            msg = 'This is message';
        }
        if (time === undefined || time == '') {
            time = 2000;
        }
        var html = '<div class="d-flex justify-content-center align-items-center" style="min-height: 200px; margin-top: 20%;">\
                        <div class="alert alert-'+ type + ' alert-dismissible-centered fade" id="alert" style="width: auto;">\
                        <i class="fa fa-'+ icon + '"></i>\
                            <strong>'+ msg + '</strong>\
                        </div>\
                    </div>';
        $('body').append(html);
        $("#alert").addClass('show');
        if (time) {
            setTimeout(function () {
                $('#alert').removeClass('show');
            }, time);
        }
    }


};