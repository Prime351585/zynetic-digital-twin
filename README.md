## Getting Started

First, run the development server:
The Project is live at click on the link ""
The design approach was to break teh components in chunks and create them one by one, due to time constraint the dashboard is not responsive to tab and mobile but can be made responsive.
Spent a total of 9 hours 4+5
Assuming the API structure of Charger Status looks like following with all the details in it, since all the components are reactive to these values

{
    status: 'offline',
    temperature: {
        external: {
            value: 35,
            humidity: 60
        },
        charger: {
            value: 45,
            humidity: 40
        },
        guns:{  
            gun1: 29,
            gun2: 39
        } 
    },
    mcb:{
        power: { status: 'on', value: 62, unit: 'kWh' },
        frequency: { value: 50, unit: 'Hz' },
        power_factor: { value: 0.95 },
        earthing: true, 
        phases: {
            l1: { current: 10.5, voltage: 230 },
            l2: { current: 9.8, voltage: 231 },
            l3: { current: 11.2, voltage: 229 }
        }
    },
    weather: 'Cloudy',
    location: 'Dubai',
    health: 'Good',
    connectivity: {
      wifi: true,
      lan: false,
      sim: true
    },
    door:{
        front: 'closed',
        left: 'closed',
        right: 'open',
    },
    emergencyStop: 'not engaged',
    gun_status: {
        gun1: 'armed',
        gun2: 'charging',
    },
    modules: {
      ccui: { status: 'online', health: 'Good', temperature: 38 },
      tcu: { status: 'online', health: 'Good', signal_strength: 85 },
      up1: { status: 'online', health: 'Good', output: 22 },
      ccu2: { status: 'online', health: 'Good' },
      plc2: { status: 'online', health: 'Good' },
      up2: { status: 'offline', health: 'Warning', output: 0 }
    },
    components: {
      fuses: {
        fu1: { status: 'ok', rated_current: 63, unit: 'A' },
        fu2: { status: 'ok', rated_current: 63, unit: 'A' }
      },
      contactors: {
        km11: { status: 'closed', health: 'Good', cycles: 12450 },
        km12: { status: 'open', health: 'Good', cycles: 12448 },
        km22: { status: 'closed', health: 'Good', cycles: 8920 },
        km31: { status: 'open', health: 'Good', cycles: 6540 },
        km32: { status: 'closed', health: 'Good', cycles: 6535 }
      }
    }
  }