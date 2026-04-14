import { ButtonPlayOnDisney } from '@/components/ButtonPlayOnDisney'
import { ButtonTeaserTrailer } from '@/components/ButtonTeaserTrailer'

import { type HeroActionsProps } from './HeroActions.types'

export const HeroActions = ({ onOpenTrailer }: HeroActionsProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      <ButtonPlayOnDisney variant="hero" />
      <ButtonTeaserTrailer onClick={onOpenTrailer} variant="hero" />
    </div>
  )
}
