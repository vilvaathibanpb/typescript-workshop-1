export interface Mission {
    name: string
}

export interface RocketData {
    name: string
}

export interface Data {
    missions?: Mission[]
    rockets?: RocketData[]
}