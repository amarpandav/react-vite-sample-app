export function convertToDate(date: string | null | undefined): Date | null {
    if (date) {
        const parsedDate = new Date(date);
        return isNaN(parsedDate.getTime()) ? null : parsedDate;
    }
    return null;
}

export function formatDateToDisplay(date: Date | null): string {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-GB').format(date); // Format as 'dd.MM.yyyy'
}