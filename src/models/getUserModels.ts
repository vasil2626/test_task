interface IgetUser {
    rating?: number | any,
    users?:[] | any,
    id?: number | any,
    first_name?: string,
    last_name?: string
}

export interface Istate {
    list?:  IgetUser| any,
    loading?: boolean,
    error?: string
}