export const directions = ['Norte', 'Sur', 'Este', 'Oeste'] as const
export type Direction = typeof directions[number]
export type Signal = 'verde' | 'amarillo' | 'rojo'
export type Scenario = 'normal' | 'punta' | 'congestion'
export type Page = 'dashboard' | 'intersection' | 'statistics' | 'connectivity' | 'learn'
export interface Lane { direction: Direction; count: number; signal: Signal; detected: boolean }
