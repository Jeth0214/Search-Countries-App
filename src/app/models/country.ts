export interface Country {
    name: string,
    topLevelDomain: string[],
    alpha2Code: string,
    alpha3Code: string,
    callingCodes: string[],
    capital: string,
    altSpellings: string[],
    region: string,
    continent: string,
    population: number,
    latlng: number[],
    demonym: string,
    area: number,
    gini: number,
    timezones: string[],
    borders: string[],
    nativeName: string,
    numericCode: number,
    currencies: {
        code: string,
        name: string,
        symbol: string
    }[],
    languages: {
        iso639_1: string,
        iso639_2: string,
        name: string,
        nativeName: string
    }[],
    translations: {
        br: string,
        pt: string,
        nl: string,
        hr: string,
        fa: string,
        de: string,
        es: string,
        fr: string,
        ja: string,
        it: string,
        hu: string
    },
    flags: { svg: string, png: string },
    regionalBlocs: [],
    cioc: string,
    independent: boolean,
    subregion: string
}