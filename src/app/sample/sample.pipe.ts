import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'NewPipe'
})

export class samplePipe implements PipeTransform{
    transform(value: any):any {
       return value.slice(0,4).toUpperCase();
    }



}