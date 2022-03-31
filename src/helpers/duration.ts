export default class Duration extends Number {
    static fromString(value: string): Duration {
       const values = value.split(':');
       if (values.length === 1) {
           return new Duration(parseInt(values[0]));
       } else if (values.length === 2) {
           return new Duration(parseInt(values[0]) * 60 + parseInt(values[1]));
       } else if (values.length === 3) {
           return new Duration(parseInt(values[0]) * 3600 + parseInt(values[1]) * 60 + parseInt(values[2]));
       }
    }
}