export interface Country {
    // model for v2 version

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
    subregion: string,


    // model for v3.1 
    // name: {
    //     common: string,
    //     official: string,
    //     nativeName: {
    //     }
    // },
    // population: number,
    // tld: [],
    // cca2: string,
    // ccn3: number,
    // cca3: string,
    // cioc: string,
    // independent: boolean,
    // status: string,
    // unMember: true,
    // currencies: {
    //     JPY: {
    //         name: string,
    //         symbol: string
    //     }
    // },
    // idd: {
    //     root: string,
    //     suffixes: []
    // },
    // capital: [],
    // altSpellings: [],
    // region: string,
    // subregion: string,
    // languages: {},
    // translations: {
    //     ces: {
    //         official: string,
    //         common: string
    //     },
    //     deu: {
    //         official: string,
    //         common: string
    //     },
    //     est: {
    //         official: string,
    //         common: string
    //     },
    //     fin: {
    //         official: string,
    //         common: string
    //     },
    //     fra: {
    //         official: string,
    //         common: string
    //     },
    //     hrv: {
    //         official: string,
    //         common: string
    //     },
    //     hun: {
    //         official: string,
    //         common: string
    //     },
    //     ita: {
    //         official: string,
    //         common: string
    //     },
    //     jpn: {
    //         official: string,
    //         common: string
    //     },
    //     kor: {
    //         official: string,
    //         common: string
    //     },
    //     nld: {
    //         official: string,
    //         common: string
    //     },
    //     per: {
    //         official: string,
    //         common: string
    //     },
    //     pol: {
    //         official: string,
    //         common: string
    //     },
    //     por: {
    //         official: string,
    //         common: string
    //     },
    //     rus: {
    //         official: string,
    //         common: string
    //     },
    //     slk: {
    //         official: string,
    //         common: string
    //     },
    //     spa: {
    //         official: string,
    //         common: string
    //     },
    //     swe: {
    //         official: string,
    //         common: string
    //     },
    //     urd: {
    //         official: string
    //         common: string
    //     },
    //     zho: {
    //         official: string,
    //         common: string
    //     }
    // },
    // latlng: [
    //     number,
    //     number
    // ],
    // landlocked: false,
    // area: number,
    // flag: string,
    // flags: {
    //     svg: string,
    //     png: string
    // },
    // demonyms: {
    //     eng: {
    //         f: string,
    //         m: string
    //     },
    //     fra: {
    //         f: string,
    //         m: string
    //     }
    // }
}



