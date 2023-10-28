interface userData<T, K> {
    name: T;
    rollNo: K;
}

export const user: userData<string, number> = {
    name: 'Sagar',
    rollNo: 23
}

export const userWithFalseData: userData<number, string> = {
    name: 23,
    rollNo: 'Sagar'
}