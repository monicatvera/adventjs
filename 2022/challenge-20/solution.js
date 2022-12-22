/**
 * @param {{type: string, weightCapacity: number}[]} reindeerTypes
 * @param {{country: string, weight: number}[]} gifts
 * @returns {{country: string, reindeers: { type: string, num: number }[]}[]}
 */
const howManyReindeers = (reindeerTypes, gifts) => {
    const getReindeers = (/** @type {number} */ weight) => {
      const allowedReindeersTypes = reindeerTypes.filter(
        reindeerType => reindeerType.weightCapacity < weight
      )
  
      let totalWeightCapacity = allowedReindeersTypes.reduce(
        (acc, reindeerType) => acc + reindeerType.weightCapacity,
        0
      )
  
      return allowedReindeersTypes
        .map(reindeerType => {
          const num = Math.floor(weight / totalWeightCapacity)
  
          weight -= num * reindeerType.weightCapacity
          totalWeightCapacity -= reindeerType.weightCapacity
  
          return {
            type: reindeerType.type,
            num,
          }
        })
        .filter(reindeerType => reindeerType.num > 0)
    }
  
    reindeerTypes.sort((a, b) => b.weightCapacity - a.weightCapacity)
  
    return gifts.map(gift => ({
      country: gift.country,
      reindeers: getReindeers(gift.weight),
    }))
  }
  
  export {howManyReindeers}