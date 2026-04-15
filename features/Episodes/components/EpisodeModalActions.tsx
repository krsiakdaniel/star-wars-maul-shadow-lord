import { ButtonIMDB } from '@/components/ButtonIMDB'
import { ButtonPlayOnDisney } from '@/components/ButtonPlayOnDisney'
import { ButtonTeaserTrailer } from '@/components/ButtonTeaserTrailer'

import { type EpisodeModalActionsProps } from './EpisodeModalActions.types'

export const EpisodeModalActions = ({ imdbHref, onShowTrailer }: EpisodeModalActionsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <ButtonPlayOnDisney />
      <ButtonTeaserTrailer onClick={onShowTrailer} />
      <ButtonIMDB href={imdbHref} />
    </div>
  )
}
