
export const getMyAge = ({ birthdayDate }: { birthdayDate: string }) => {

    const initialDate: Date = new Date(birthdayDate);

    if (isNaN(initialDate.getTime())) {
        return 'Invalid initial date. Please enter a valid date.';
    }

    const currentDate: Date = new Date();

    if (initialDate > currentDate) {
        return 'The initial date cannot be greater than the current date.';
    }

    const differenceInMs: number = currentDate.getTime() - initialDate.getTime();

    const msInYear: number = 1000 * 60 * 60 * 24 * 365.25;

    const yearsElapsed: number = Math.floor(differenceInMs / msInYear);

    return yearsElapsed;

}


