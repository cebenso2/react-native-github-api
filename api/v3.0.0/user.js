/** 
 *  mixin user
 * 
 *  Copyright 2012 Cloud9 IDE, Inc.
 *
 *  This product includes software developed by
 *  Cloud9 IDE, Inc (http://c9.io).
 *
 *  Author: Mike de Boer <mike@c9.io>
 **/

"use strict";

var error = require("./../../error");
var Util = require("./../../util");

var user = module.exports = {
    user: {}
};

(function() {
    /**
     *  user#getFrom(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     **/
    this.getFrom = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  user#get(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  No params, simply pass an empty Object literal `{}`
     **/
    this.get = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  user#update(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - name (String): Optional. 
     *  - email (String): Optional. 
     *  - blog (String): Optional. 
     *  - company (String): Optional. 
     *  - location (String): Optional. 
     *  - hireable (Boolean): Optional. 
     *  - bio (String): Optional. 
     **/
    this.update = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  user#getEmails(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     **/
    this.getEmails = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  user#addEmails(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  No params, simply pass an empty Object literal `{}`
     **/
    this.addEmails = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  user#deleteEmails(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  No params, simply pass an empty Object literal `{}`
     **/
    this.deleteEmails = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  user#getFollowers(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     **/
    this.getFollowers = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  user#getFollowingFromUser(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     **/
    this.getFollowingFromUser = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  user#getFollowing(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     **/
    this.getFollowing = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  user#getFollowUser(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     **/
    this.getFollowUser = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  user#followUser(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     **/
    this.followUser = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  user#unFollowUser(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - user (String): Required. 
     **/
    this.unFollowUser = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  user#getKeys(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - page (Number): Optional. Page number of the results to fetch. Validation rule: ` ^[0-9]+$ `.
     *  - per_page (Number): Optional. A custom page size up to 100. Default is 30. Validation rule: ` ^[0-9]+$ `.
     **/
    this.getKeys = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  user#getKey(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - id (Number): Required. Validation rule: ` ^[0-9]+$ `.
     **/
    this.getKey = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  user#createKey(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - title (String): Required. 
     *  - key (String): Required. 
     **/
    this.createKey = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  user#updateKey(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - id (Number): Required. Validation rule: ` ^[0-9]+$ `.
     *  - title (String): Required. 
     *  - key (String): Required. 
     **/
    this.updateKey = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

    /**
     *  user#deleteKey(msg, callback) -> null
     *      - msg (Object): Object that contains the parameters and their values to be sent to the server.
     *      - callback (Function): function to call when the request is finished with an error as first argument and result data as second argument.
     * 
     *  ##### Params on the `msg` object:
     * 
     *  - id (Number): Required. Validation rule: ` ^[0-9]+$ `.
     **/
    this.deleteKey = function(msg, block, callback) {
        var self = this;
        this.client.httpSend(msg, block, function(err, res) {
            if (err)
                return self.sendError(err, null, msg, callback);

            var ret;
            try {
                ret = JSON.parse(res.data);
            }
            catch (ex) {
                if (callback)
                    callback(new error.InternalServerError(ex.message), res);
                return;
            }
            
            if (!ret)
                ret = {};
            if (!ret.meta)
                ret.meta = {};
            ["x-ratelimit-limit", "x-ratelimit-remaining", "link"].forEach(function(header) {
                if (res.headers[header])
                    ret.meta[header] = res.headers[header];
            });
            
            if (callback)
                callback(null, ret);
        });
    };

}).call(user.user);