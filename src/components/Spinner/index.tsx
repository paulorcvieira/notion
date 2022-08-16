import { BarLoader, ClipLoader, FadeLoader } from 'react-spinners'
import { useTheme } from 'styled-components'

import * as S from './styles'

interface ISpinnerProps {
  small?: boolean
  barLoader?: boolean
}

export default function Spinner({ small, barLoader }: ISpinnerProps) {
  const { colors } = useTheme()

  return small ? (
    <S.SpinnerSmall>
      <ClipLoader size={25} color={colors.green[300]} />
    </S.SpinnerSmall>
  ) : barLoader ? (
    <S.SpinnerSmall>
      <BarLoader color={colors.green[300]} />
    </S.SpinnerSmall>
  ) : (
    <S.SpinnerMedium>
      <FadeLoader
        color={colors.green[300]}
        height={15}
        width={5}
        radius={2}
        margin={2}
      />
    </S.SpinnerMedium>
  )
}
