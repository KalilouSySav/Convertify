<template>
  <div class="container-fluid bg-image">
    <br><br>
    <div class="row justify-content-center align-items-start vh-100">
      <div class="col-md-6 col-lg-4 bg-light rounded-3 p-5">
        <h1 class="text-center mb-4" style="background: linear-gradient(to right, #8b78e6, #a2d2ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: 'Pacifico', cursive;"><i class="bi bi-calculator"></i> {{type}} Converter</h1>
        <div class="mb-3 d-flex align-items-center">
          <label for="value" class="form-label mb-0 me-3 text-start w-75" style="color: #8b78e6; width: 80px;"><i class="bi bi-hash me-2"></i> Value:</label>
          <input v-model="value" type="number" :min="minValue" class="form-control rounded-3" id="value" style="background: linear-gradient(to right, #FFFFFF, #F8F8F8);">
          
    <br>
        </div>
        <div class="mb-3 d-flex align-items-center">
          <label for="fromUnit" class="form-label mb-0 me-3 text-start w-75" style="color: #8b78e6; width: 80px;"><i class="bi bi-arrow-left-right me-2"></i> From:</label>
          <select v-model="fromUnit" class="form-select rounded-3" id="fromUnit" style="background: linear-gradient(to right, #FFFFFF, #F8F8F8);">
            <option :value="null" disabled>-- select from unit --</option>
            <option v-for="(unit, key) in filteredUnits" :key="key" :value="key">{{ unit }}</option>
          </select>
        </div>
        <div class="mb-3 d-flex align-items-center">
          <label for="toUnit" class="form-label mb-0 me-3 text-start w-75" style="color: #8b78e6; width: 80px;"><i class="bi bi-arrow-left-right me-2"></i> To:</label>
          <select v-model="toUnit" class="form-select rounded-3" id="toUnit" style="background: linear-gradient(to right, #FFFFFF, #F8F8F8);">
            <option :value="null" disabled>-- select to unit --</option>
            <option v-for="(unit, key) in filteredUnits" :key="key" :value="key">{{ unit }}</option>
          </select>
        </div>
        <div class="mb-3 d-flex align-items-center">
          <label for="round" class="form-label mb-0 me-3 text-start w-75" style="color: #8b78e6; width: 80px;"><i class="bi bi-circle me-2"></i> Round:</label>
          <input type="number" onkeypress="return event.charCode >= 48" min="0" id="round" v-model="round" class="form-control rounded-3" style="background: linear-gradient(to right, #FFFFFF, #F8F8F8);">
        </div>
        <div class="text-center mt-4">
          <button @click="convert" class="btn btn-primary rounded-3" style="background: linear-gradient(to right, #8b78e6, #a2d2ff);"> <i class="bi bi-arrow-repeat"></i> Convert</button>
        </div>
        <div v-if="result" class="mt-4">
          <hr class="my-4" style="border-top: 2px solid #8b78e6;">
          <p class="text-center mb-0" style="color: #8b78e6; font-size: 1.5rem;"><i class="bi bi-arrow-down-up"></i></p>
          <p class="text-center" style="color: #8b78e6;">{{ result }}</p>
        </div>
      <div>
    <div class="alert alert-danger alert-dismissible fade show small" role="alert" v-if="errorMessage" style="background-color: #f8d7da; color: #721c24; font-size: 0.9rem;">
      {{ errorMessage }}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" style="font-size: 1rem;" @click="errorMessage = ''"></button>
    </div>
  </div>
  
      </div>
      <div class="col-md-4  bg-dark rounded-3 p-5 text-light">
        <Historique_component></Historique_component>

      </div>

    
    </div>
    
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
  body {
    font-family: 'Poppins', sans-serif;
  }
  .form-control:focus {
    box-shadow: none;
  }
  .form-select:focus {
    box-shadow: none;
  }
  .bg-image {
    background-image: url('/src/assets/img/background-vue.png');
    background-size: cover;
    background-position: center;
    animation: slide 20s infinite alternate;
  }
  
  @keyframes slide {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 100%;
    }
  }
</style>


<script>
import ConversionService from "@/services/conversion.js";
import Historique_component from "@/components/Historique_component.vue";
import store from '@/store.js'

export default {
  name: 'ConversionForm',
  components : {
    Historique_component
  },
  data() {
    return {
      value: '',
      fromUnit: null,
      toUnit: null,
      result: '',
      errorMessage: '',
      typesAllowingNegative: [
        'temperature',
        'force',
        'angle',
        'energy',
      ],
      units: {
        temperature: {
          celsius: 'Celsius',
          fahrenheit: 'Fahrenheit',
          kelvin: 'Kelvin',
        },
        length: {
          meter: 'Meter',
          centimeter: 'Centimeter',
          millimeter: 'Millimeter',
          kilometer: 'Kilometer',
          inch: 'Inch',
          foot: 'Foot',
          yard: 'Yard',
          mile: 'Mile',
        },
        volume: {
            liter: 'Liter',
            milliliter: 'Milliliter',
            gallon: 'Gallon',
            quart: 'Quart',
            pint: 'Pint',
            cup: 'Cup',
            fluid_ounce: 'Fluid Ounce',
            tablespoon: 'Tablespoon',
            teaspoon: 'Teaspoon',
          },
          mass: {
            kilogram: 'Kilogram',
            gram: 'Gram',
            milligram: 'Milligram',
            tonne: 'Tonne',
            pound: 'Pound',
            ounce: 'Ounce',
          },
          speed: {
            meters_per_second: 'Meters per Second',
            kilometers_per_hour: 'Kilometers per Hour',
            miles_per_hour: 'Miles per Hour',
            knot: 'Knot',
          },
          time: {
            second: 'Second',
            millisecond: 'Millisecond',
            minute: 'Minute',
            hour: 'Hour',
            day: 'Day',
            week: 'Week',
            month: 'Month',
            year: 'Year',
          },
          pressure: {
            pascal: 'Pascal',
            kilopascal: 'Kilopascal',
            bar: 'Bar',
            psi: 'Psi',
            ksi: 'Ksi',
          },
          digital: {
            bit: 'Bit',
            byte: 'Byte',
            kilobit: 'Kilobit',
            kilobyte: 'Kilobyte',
            megabit: 'Megabit',
            megabyte: 'Megabyte',
            gigabit: 'Gigabit',
            gigabyte: 'Gigabyte',
            terabit: 'Terabit',
            terabyte: 'Terabyte',
            petabit: 'Petabit',
            petabyte: 'Petabyte',
            exabit: 'Exabit',
            exabyte: 'Exabyte',
            zettabit: 'Zettabit',
            zettabyte: 'Zettabyte',
            yottabit: 'Yottabit',
            yottabyte: 'Yottabyte',
          },
          angle: {
            degree: 'Degree',
            radian: 'Radian',
            gradian: 'Gradian',
            arcminute: 'Minute of Arc',
            arcsecond: 'Second of Arc',
            revolution: 'Revolution',
            turn: 'Turn',
            quadrant: 'Quadrant',
            sextant: 'Sextant',
            mil : 'Mil',
            sign : 'Sign',
          },
          // frequency: {
          //   hertz: 'Hertz',
          //   kilohertz: 'Kilohertz',
          //   megahertz: 'Megahertz',
          //   gigahertz: 'Gigahertz',
          //   terahertz: 'Terahertz',
          //   rpm: 'RPM',
          //   deg_s: 'Deg/s',
          //   rad_s: 'Rad/s',
          // },
          force: {
            newton: 'Newton',
            tonforce : 'Tonne Force',
            gramforce: 'Gram Force',
            kilogramforce: 'Kilogram Force',
            poundforce: 'Pound Force',
            poundal: 'Poundal',
            kipforce: 'Kip',
            ounceforce: 'Ounceforce',
            dyne : 'Dyne',
            

          },
          energy: {
            joule: 'Joule',
            kilojoule: 'Kilojoule',
            gram_calorie: 'Gram Calorie',
            kilocalorie: 'Kilocalorie',
            watt_hour: 'Watt Hour',
            kilowatt_hour: 'Kilowatt Hour',
            electronvolt: 'Electronvolt',
            british_thermal_unit: 'British Thermal Unit',
            us_therm: 'US Therm',
            foot_pound: 'Foot Pound',
          },
          power: {
            watt: 'Watt',
            kilowatt: 'Kilowatt',
            horsepower: 'Horsepower',
            horsepower_uk: 'Horsepower (UK)',
            horsepower_metric: 'Horsepower (Metric)',
            horsepower_electric: 'Horsepower (Electric)',
          },
          // magnetism: {
          //   tesla: 'Tesla',
          //   gauss: 'Gauss',
          //   weber: 'Weber',
          //   maxwell: 'Maxwell',
          //   gamma: 'Gamma',
          //   oersted: 'Oersted',
          //   ampere_turn: 'Ampere Turn',
          // },

      },
    };
  },
  computed: {
    type() {
      return this.$route.params.type || 'temperature';
    },
    minValue() {
      return this.typesAllowingNegative.includes(this.type) ? undefined : 0;
    },
    filteredUnits() {
      if (!this.units[this.type]) {
        return {};
      }
      return this.units[this.type];
    },
  },
  methods: {
    validateInput() {
      if (this.value < 0 && !this.typesAllowingNegative.includes(this.type)) {
        this.errorMessage = `La mesure ${this.type} n'accepte pas les nombres négatifs`;
      } else {
        this.errorMessage = '';
      }
    },
    convert() {
      this.validateInput();
      if (this.errorMessage) {
        return;
      }

      if (!this.fromUnit || !this.toUnit) {
        return;
      }
      const from = this.fromUnit;
      const to = this.toUnit;
      const round = this.round;
      const result = ConversionService.convert(this.value, { type: this.type, name: from }, { type: this.type, name: to });
      this.result = `${this.value} ${from} is ${result.toFixed(round)} ${to}`;
       // Ajoute le résultat à l'historique des conversions
    store.dispatch('addResult', {
      value: this.value,
      from: this.fromUnit,
      to: this.toUnit,
      result: result.toFixed(round),
    })
    
    // Émet un événement pour informer les autres composants de la conversion
    this.$emit('conversion', {
      value: this.value,
      from: this.from,
      to: this.to,
      result: this.result
    })

    },
  },
};
</script> 







<!-- <template>
  <div>
    <label>Value:</label>
    <input v-model="value" type="number" />
    <label>From:</label>
    <select v-model="fromUnit">
      <option v-for="(unit, key) in filteredUnits" :key="key" :value="{name: key, type: unit.type}">
        {{ key }}
      </option>
    </select>

    <label>To:</label>
    <select v-model="toUnit">
      <option v-for="(unit, key) in filteredUnits" :key="unit.name" :value="{name: key, type: unit.type}">
        {{ key }}

      );
    }
  },
  computed: {
    units() {
      return {
        
       
       
        //   partsPer: {
        //     ppm: 'Part-per-million',
        //     ppb: 'Part-per-billion',
        //     ppt: 'Part-per-trillion',
        //     ppq: 'Part-per-quadrillion',
        //   },
       
        //   speed: {
        //     metersPerSecond: 'Meters-per-second',
        //     kilometersPerHour: 'Kilometers-per-hour',
        //     milesPerHour: 'Miles-per-hour',
        //     knot: 'Knot',
        //   },
        //   pace: {
        //     secondsPerMeter: 'Seconds-per-meter',
        //     secondsPerKilometer: 'Seconds-per-kilometer',
        //     minutesPerKilometer: 'Minutes-per-kilometer',
        //     minutesPerMile: 'Minutes-per-mile',
        //     secondsPerMile: 'Seconds-per-mile',
        //   },
        //   current: {
        //     ampere: 'Ampere',
        //     milliampere: 'Milliampere',
        //     volt: 'Volt',
        //     kilovolt: 'Kilovolt',
        //   },
        //   voltage: {
        //     volt: 'Volt',
        //     millivolt: 'Millivolt',
        //     kilovolt: 'Kilovolt',
        //   },
        //   power: {
        //     watt: 'Watt',
        //     milliwatt: 'Milliwatt',
        //     kilowatt: 'Kilowatt',
        //     megawatt: 'Megawatt',
        //     gigawatt: 'Gigawatt',
        //   },
        //   apparentPower: {
        //     voltAmpere: 'Volt-ampere',
        //     kilovoltAmpere: 'Kilovolt-ampere',
        //     megavoltAmpere: 'Megavolt-ampere',
        //   },
        //   reactivePower: {
        //     voltAmpereReactive: 'Volt-ampere-reactive',
        //     kilovoltAmpereReactive: 'Kilovolt-ampere-reactive',
        //     megavoltAmpereReactive: 'Megavolt-ampere-reactive',
        //   },
       
        //   reactiveEnergy: {
        //     voltAmpereReactiveHour: 'Volt-ampere-reactive-hour',
        //     kilovoltAmpereReactiveHour: 'Kilovolt-ampere-reactive-hour',
        //     megavoltAmpereReactiveHour: 'Megavolt-ampere-reactive-hour',
        //   },
        //   angle: {
        //     degree: 'Degree',
        //     radian: 'Radian',
        //     gradian: 'Gradian',
        //     arcminute: 'Arcminute',
        //     arcsecond: 'Arcsecond',
        //   },
        //   charge: {
        //     coulomb: 'Coulomb',
        //     millicoulomb: 'Millicoulomb',
        //     microcoulomb: 'Microcoulomb',
        //     nanocoulomb: 'Nanocoulomb',
        //     picocoulomb: 'Picocoulomb',
        //     abcoulomb: 'Abcoulomb',
        //     ampereHour: 'Ampere-hour',
        //     milliampereHour: 'Milliampere-hour',
        //     ampereMinute: 'Ampere-minute',
        //     ampereSecond: 'Ampere-second',
        //     faraday: 'Faraday',
        //   },
        //   illuminance: {
        //     lux: 'Lux',
        //     meterCandle: 'Meter-candle',
        //     centimeterCandle: 'Centimeter-candle',
        //     footCandle: 'Foot-candle',
        //   },
        //   magnetism: {
        //     tesla: 'Tesla',
        //     weber: 'Weber',
        //     maxwell: 'Maxwell',
        //     gauss: 'Gauss',
        //   },
      }
    }
  }
}
</script>

<style>
/* Styles CSS pour le composant */
</style> -->
