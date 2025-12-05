export type ChargerStatus = 'online' | 'offline' | 'charging' | 'idle' | 'error'

export type DoorStatus = 'open' | 'closed'

export type GunStatus = 'armed' | 'charging' | 'idle' | 'fault'

export type ModuleStatus = 'online' | 'offline' | 'error'

export type Health = 'Good' | 'Warning' | 'Critical'

export type FuseStatus = 'ok' | 'blown' | 'warning'

export type ContactorStatus = 'open' | 'closed' | 'fault'

export type EmergencyStopStatus = 'engaged' | 'not engaged'

export interface TemperatureHumidity {
  value: number
  humidity: number
}

export interface GunTemperatures {
  gun1: number
  gun2: number
}

export interface Temperature {
  external: TemperatureHumidity
  charger: TemperatureHumidity
  guns: GunTemperatures
}

export interface Phase {
  current: number
  voltage: number
}

export interface MCBPhases {
  l1: Phase
  l2: Phase
  l3: Phase
}

export interface MCB {
  power: {
    status: 'on' | 'off'
    value: number
    unit: string
  }
  frequency: {
    value: number
    unit: string
  }
  power_factor: {
    value: number
  }
  earthing: boolean
  phases: MCBPhases
}

export interface Connectivity {
  wifi: boolean
  lan: boolean
  sim: boolean
}

export interface Door {
  front: DoorStatus
  left: DoorStatus
  right: DoorStatus
}

export interface GunStatusMap {
  gun1: GunStatus
  gun2: GunStatus
}

export interface ModuleCCUI {
  status: ModuleStatus
  health: Health
  temperature: number
}

export interface ModuleTCU {
  status: ModuleStatus
  health: Health
  signal_strength: number
}

export interface ModuleUP {
  status: ModuleStatus
  health: Health
  output: number
}

export interface ModuleBasic {
  status: ModuleStatus
  health: Health
}

export interface Modules {
  ccui: ModuleCCUI
  tcu: ModuleTCU
  up1: ModuleUP
  ccu2: ModuleBasic
  plc2: ModuleBasic
  up2: ModuleUP
}

export interface Fuse {
  status: FuseStatus
  rated_current: number
  unit: string
}

export interface Contactor {
  status: ContactorStatus
  health: Health
  cycles: number
}

export interface Components {
  fuses: {
    fu1: Fuse
    fu2: Fuse
  }
  contactors: {
    km11: Contactor
    km12: Contactor
    km22: Contactor
    km31: Contactor
    km32: Contactor
  }
}

export interface ChargerStatusResponse {
  status: ChargerStatus
  temperature: Temperature
  mcb: MCB
  weather: string
  location: string
  health: Health
  connectivity: Connectivity
  door: Door
  emergencyStop: EmergencyStopStatus
  gun_status: GunStatusMap
  modules: Modules
  components: Components
}
