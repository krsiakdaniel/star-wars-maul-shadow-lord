import { UI } from '@/texts/ui'

import { ButtonDisney } from '@/components/ButtonDisney'
import { ButtonIMDB } from '@/components/ButtonIMDB'
import { ButtonTeaserTrailer } from '@/components/ButtonTeaserTrailer'

import { type EpisodeModalActionsProps } from './EpisodeModalActions.types'

export const EpisodeModalActions = ({ imdbHref, onShowTrailer }: EpisodeModalActionsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <ButtonTeaserTrailer text={UI.hero.teaserTrailer} onClick={onShowTrailer} />
      <ButtonDisney />
      <ButtonIMDB href={imdbHref} />
    </div>
  )
}
