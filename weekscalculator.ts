export class WeeksCalculator {
    // Zwraca numer tygodnia w roku wg. ISO-8601 - tydzień rozpoczyna się w poniedziałek
    public getWeekNumberISO(date: Date): number {
        const dt = date;
        const tdt = new Date(dt.valueOf());
        const dayn = (dt.getDay() + 6) % 7;
        tdt.setDate(tdt.getDate() - dayn + 3);
        const firstThursday = tdt.valueOf();
        tdt.setMonth(0, 1);
        if (tdt.getDay() !== 4) {
            tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
        }
        return 1 + Math.ceil((firstThursday - tdt.valueOf()) / 604800000);
    }


    // Zwraca liczbę tygoni w aktualnym roku
    public getWeeksInYearISO(year: number): number {
        const date = new Date(year, 11, 31); // Miesiac 11 poniewaz liczone jest od 0
        const weekNumber = this.getWeekNumberISO(date);
        return weekNumber;
    }
}
