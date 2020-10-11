import { Evidence } from '~data/evidence'
import { IGhost } from '.'

export const mare: IGhost = {
  evidence: [Evidence.SPIRIT_BOX, Evidence.FREEZING, Evidence.ORBS],
  description:
    'The Mare is the source of all nightmares, making it most powerful in the dark.',
  strength: 'They have an increased chance to attack when in the dark.',
  weakness:
    'Turning the lights on around the Mare will lower its chance to attack.',
}
