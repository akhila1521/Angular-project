import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})

export class sampleService{
    shareData:string='this is service';

    showvalue():any{
        return 'this is a service method';
    }
}