import {howManyReindeers} from './solution'

const cases = [
  {
    reindeerTypes: [
      {type: 'Nuclear', weightCapacity: 50},
      {type: 'Electric', weightCapacity: 10},
      {type: 'Gasoline', weightCapacity: 5},
      {type: 'Diesel', weightCapacity: 1},
    ],
    gifts: [
      {country: 'Spain', weight: 30},
      {country: 'France', weight: 17},
      {country: 'Italy', weight: 50},
    ],
    expected: [
      {
        country: 'Spain',
        reindeers: [
          {
            type: 'Electric',
            num: 1,
          },
          {
            type: 'Gasoline',
            num: 3,
          },
          {
            type: 'Diesel',
            num: 5,
          },
        ],
      },
      {
        country: 'France',
        reindeers: [
          {
            type: 'Electric',
            num: 1,
          },
          {
            type: 'Gasoline',
            num: 1,
          },
          {
            type: 'Diesel',
            num: 2,
          },
        ],
      },
      {
        country: 'Italy',
        reindeers: [
          {
            type: 'Electric',
            num: 3,
          },
          {
            type: 'Gasoline',
            num: 3,
          },
          {
            type: 'Diesel',
            num: 5,
          },
        ],
      },
    ],
  },
  {
    reindeerTypes: [
      {type: 'Electric', weightCapacity: 10},
      {type: 'Gasoline', weightCapacity: 5},
      {type: 'Diesel', weightCapacity: 1},
    ],
    gifts: [{country: 'Spain', weight: 37}],
    expected: [
      {
        country: 'Spain',
        reindeers: [
          {
            type: 'Electric',
            num: 2,
          },
          {
            type: 'Gasoline',
            num: 2,
          },
          {
            type: 'Diesel',
            num: 7,
          },
        ],
      },
    ],
  },
  {
    reindeerTypes: [
      {type: 'Nuclear', weightCapacity: 50},
      {type: 'Electric', weightCapacity: 10},
      {type: 'Gasoline', weightCapacity: 5},
      {type: 'Diesel', weightCapacity: 1},
    ],
    gifts: [
      {country: 'Spain', weight: 30},
      {country: 'Germany', weight: 7},
      {country: 'France', weight: 17},
      {country: 'Italy', weight: 50},
    ],
    expected: [
      {
        country: 'Spain',
        reindeers: [
          {
            type: 'Electric',
            num: 1,
          },
          {
            type: 'Gasoline',
            num: 3,
          },
          {
            type: 'Diesel',
            num: 5,
          },
        ],
      },
      {
        country: 'Germany',
        reindeers: [
          {
            type: 'Gasoline',
            num: 1,
          },
          {
            type: 'Diesel',
            num: 2,
          },
        ],
      },
      {
        country: 'France',
        reindeers: [
          {
            type: 'Electric',
            num: 1,
          },
          {
            type: 'Gasoline',
            num: 1,
          },
          {
            type: 'Diesel',
            num: 2,
          },
        ],
      },
      {
        country: 'Italy',
        reindeers: [
          {
            type: 'Electric',
            num: 3,
          },
          {
            type: 'Gasoline',
            num: 3,
          },
          {
            type: 'Diesel',
            num: 5,
          },
        ],
      },
    ],
  },
  {
    reindeerTypes: [
      {type: 'Diesel', weightCapacity: 1},
      {type: 'Gasoline', weightCapacity: 5},
    ],
    gifts: [
      {country: 'Spain', weight: 30},
      {country: 'Germany', weight: 7},
    ],
    expected: [
      {
        country: 'Spain',
        reindeers: [
          {
            type: 'Gasoline',
            num: 5,
          },
          {
            type: 'Diesel',
            num: 5,
          },
        ],
      },
      {
        country: 'Germany',
        reindeers: [
          {
            type: 'Gasoline',
            num: 1,
          },
          {
            type: 'Diesel',
            num: 2,
          },
        ],
      },
    ],
  },
]

describe('Day 20 challenge', () => {
  it.each(cases)(
    'organizes gifts in the adequate reindeers types',
    ({reindeerTypes, gifts, expected}) => {
      expect(howManyReindeers(reindeerTypes, gifts)).toEqual(expected)
    }
  )
})