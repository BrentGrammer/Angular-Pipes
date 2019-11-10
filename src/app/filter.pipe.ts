import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  // This enables the list to be updated when a server is added even when in filter mode (filter input has a value inputted)
  // Use this with caution since it has potential performance issues:
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    // check if there is no input and return the entire list
    if (value.length === 0 || filterString === "") {
      // return the empty string if nothing in the fitler input on html
      return value;
    }

    const resultArray = [];

    // item would be a server in the servers array from app component
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }
}
