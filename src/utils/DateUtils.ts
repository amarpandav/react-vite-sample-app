export class DateUtils {
    public static isWeekend(date: Date) {
        return date.getDay() === 0 || date.getDay() === 6;
    }

    public static parseISODate(date: string | null | undefined | unknown): Date | null {
        if (typeof date === 'string' || date instanceof Date) {
            const parsedDate = new Date(date);
            return isNaN(parsedDate.getTime()) ? null : parsedDate;
        }
        return null;
    }

    public static formatISODate(date: Date | null | undefined): string {
        if(date){
            const s = new Intl.DateTimeFormat("de-CH", {day: '2-digit', month: '2-digit', year: 'numeric'}).format(date);
            console.log(s);
            return s;
        }
        return "";
    }

    public static formatToISODate(date: Date | null | undefined): string {
        //https://dockyard.com/blog/2020/02/14/you-probably-don-t-need-moment-js-anymore
        //more info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
        //
        //let formatted = new Intl.DateTimeFormat("en_US").format(date);
        //let formatted = new Intl.DateTimeFormat(AppConstants.LOCALE, {year:'numeric', month:'2-digit', day:'2-digit' }).format(date); 13.08.2024
        // YYYY-MM-DD 2024-08-13
        //without {day:'2-digit', month:'2-digit', year:'numeric' } -> 13.8.2024
        //with {day:'2-digit', month:'2-digit', year:'numeric' } -> 13.08.2024
        if(date){
            return new Intl.DateTimeFormat("fr-CA", {year: 'numeric', month: '2-digit', day: '2-digit'}).format(date);
        }
        return "";
        //return date.toISOString().split('T')[0];

        /*if (!date) return '';
        return new Intl.DateTimeFormat('en-GB').format(date); // Format as 'dd/MM/yyyy'*/
    }


    public static today(): Date {
        const date = new Date();
        //date.setHours(0,0,0,0);
        return date;
    }

    public static nextDay(date: Date): Date {
        const clonedDay =   DateUtils.cloneDay(date);
        const newDateNumber = clonedDay.setDate(clonedDay.getDate() + 1);
        const newDate = new Date(newDateNumber);
        //newDate.setHours(0,0,0,0,);
        return newDate;
    }

    public static prevDay(date: Date): Date {
        const clonedDay =   DateUtils.cloneDay(date);
        const newDateNumber = clonedDay.setDate(clonedDay.getDate() - 1);
        const newDate = new Date(newDateNumber);
        //newDate.setHours(0,0,0,0,);
        return newDate;
    }

    public static cloneDay(date: Date): Date {
        const newDate = new Date(date.getTime())
        //newDate.setHours(0,0,0,0);
        return newDate;
    }

    public static newDate(value: string): Date {
        const newDate = new Date(value)
        //newDate.setHours(0,0,0,0);
        return newDate;
    }

    public static currentDay(): number {
        return new Date().getDay();
    }

    public static currentMonth(): number {
        return new Date().getMonth();
    }

    public static currentYear(): number {
        return new Date().getFullYear();
    }

    /*
      public static isTodayOrPast(date: Date): boolean {
        date.is
        return moment(date).isSame(moment(new Date()), 'day') || moment(date).isBefore(moment(new Date()));
      }


      public static isTodayOrFuture(date: Date): boolean {
        return moment(date).isSame(moment(new Date()), 'day') || moment(date).isAfter(moment(new Date()));
      }
    */


}

/*export function formatDateToDisplay(date: Date | null): string {

}*/