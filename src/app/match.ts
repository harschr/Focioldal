export interface Match {
    date: string, // JSON nem tud valódi JavaScript Date objektumot továbbítani, ezért szöveges formában utazik. A backendből érkező Match objektumban a date egy string.
    opponent: string,
    competition: string,
    home: boolean,
    status: string,
    manUtdScore: number,
    opponentScore: number,
}

//Ez az extends azt jelenti:
//„A MatchWithMonth rendelkezzen minden olyan property-vel, amivel a Match rendelkezik, és ezen felül legyen még egy month property-je.”

export interface MatchWithMonth extends Match {
    month: string
}