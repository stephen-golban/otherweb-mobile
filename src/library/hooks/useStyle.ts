import { AppTheme, useTheme } from '../../theme';

export function useStyle<T>(style: (theme: AppTheme) => T): T {
  const theme = useTheme();

  return style(theme);
}
