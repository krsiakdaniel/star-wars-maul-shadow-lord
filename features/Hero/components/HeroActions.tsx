import { IMDB_SHOW } from '@/data/constants'

import { ButtonIMDB } from '@/components/ButtonIMDB'
import { ButtonTeaserTrailer } from '@/components/ButtonTeaserTrailer'

import { type HeroActionsProps } from './HeroActions.types'

export const HeroActions = ({ onOpenTrailer }: HeroActionsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <ButtonTeaserTrailer onClick={onOpenTrailer} />
      <ButtonIMDB href={IMDB_SHOW} />
    </div>
  )
}
