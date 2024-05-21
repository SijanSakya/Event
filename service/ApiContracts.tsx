export default class ApiContracts {
    baseUrl = "https://api.pvenetwork.com";
    apiVersion = "/v1";
    enum_methods = {
        GET: "GET",
        POST: "POST",
        DEL: "DELETE",
        PUT: "PUT",
        PATCH: "PATCH",
    };

    url = "";
    endpoint = "";
    method = "";
    reqDataRef = "";

    contratReturn() {
        //error handling
        if (
            !this.baseUrl ||
            !this.apiVersion ||
            !this.apiVersion ||
            !this.endpoint ||
            !this.method
        ) {
            console.error(
                "API Contracts: Some contract data missing or invalid"
            );
            return 0;
        }

        var apiUrl = this.baseUrl + this.apiVersion + this.url + this.endpoint;
        return { apiUrl, method: this.method, reqDataRef: this.reqDataRef };
    }


    //HOME
    home(apiName: string): any {
        switch (apiName) {
            case "pastEvents":
                this.url = "/pastEvents";
                this.endpoint = "/";
                this.method = this.enum_methods.GET;
                this.reqDataRef = "";
                break;
            case "gallery":
                this.url = "/gallery";
                this.endpoint = "/";
                this.method = this.enum_methods.GET;
                this.reqDataRef = "";
                break;
            case "upcomings":
                this.url = "";
                this.endpoint = "/upcomings";
                this.method = this.enum_methods.GET;
                this.reqDataRef = "";
                break;
            case "connect": 
                this.url = "";
                this.endpoint = "/connect";
                this.method = this.enum_methods.GET;
                this.reqDataRef = "";
                break;
            default:
                throw new Error(`Invalid API name: ${apiName}`);
        }
    
        return this.contratReturn();
    }

    //
}