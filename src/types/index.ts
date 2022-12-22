
export interface Word {
    rus: string,
    en: string,
    id: number,
}

export interface CardProps {
    words: {
        [key: string]: Word[]
    }
    options: Options
}
export interface objWords {
    [key: string]: Word[]
}

export interface Options {
     selectedGroups: Array<string>
}