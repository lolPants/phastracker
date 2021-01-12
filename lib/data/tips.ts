export enum Tip {
  CLICK_GHOST = 'Click on a Ghost in the table to learn more about it.',
  RULE_OUT = "Only rule out evidence you are *absolutely sure* isn't present.",
  EMF_5 = 'You need all five lights lit on the EMF reader to count as evidence.',
  STRENGTHS = 'Pay attention to the strengths / weaknesses of possible ghosts.',
  SPEED = "Try to locate the Ghost's room as fast as possible, *then* start gathering evidence.",
  LOCATING = 'Use EMF Readers and Thermometers to locate the ghost quickly.',
  ROOM = 'The ghost will inhabit one room on the map, and they will stay there ~80% of the time.',
  HIDE = 'Hiding in a closet is often a more effective means of survival than running away.',
  BONE = 'Taking a photo of a bone before picking it up will net you more cash.',
  BONUS = 'If you find a bloody cleaver or a voodoo doll you can photograph them for bonus cash.',
  CORPSE = "Snapping a photo of your buddies' corpse is worth a whole $10.",
  PTT = 'The ghost can always hear you, even when not holding push-to-talk.',
  LOSE_ITEMS = "If you survive, all your items are returned to you. You don't have to bring them back to the truck.",
  HUNT_SANITY = 'All ghost types start hunting when you drop below 50% sanity, with the exception of the Banshee which can hunt at any time.',
  HUNT_LIGHT = 'Turning your flashlight off during a hunt has no effect on the ghost tracking you.',
  CANDLE = 'Using candles for natural light can slow sanity drain.',
}

export const randomTip: () => Tip = () => {
  const array = Object.values(Tip)
  return array[Math.floor(Math.random() * array.length)]
}
