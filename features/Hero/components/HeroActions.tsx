import { IMDB_SHOW } from '@/data/constants'

import { UI } from '@/texts/ui'

import { ButtonIMDB } from '@/components/ButtonIMDB'
import { ButtonTeaserTrailer } from '@/components/ButtonTeaserTrailer'

import { type HeroActionsProps } from './HeroActions.types'

export const HeroActions = ({ onOpenTrailer }: HeroActionsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <ButtonTeaserTrailer text={UI.hero.actionTrailer} onClick={onOpenTrailer} />
      <ButtonIMDB href={IMDB_SHOW} />
    </div>
  )
}
