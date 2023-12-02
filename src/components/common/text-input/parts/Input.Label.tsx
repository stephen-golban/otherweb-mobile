import React from 'react';
import { View } from 'react-native';

import style from '../style';
import { useTheme } from '../../../../theme';
import { useTranslation } from 'react-i18next';
import { useStyle } from '../../../../library/hooks';

import { Text } from '../../text';

import type { LabelProps } from '../type';

const TextInputLabel = ({ label, labelI18n, required }: LabelProps) => {
  const styles = useStyle(style);
  const [t] = useTranslation();

  const { colors } = useTheme();

  const content = React.useMemo(() => label || (labelI18n && t(labelI18n)), [label, labelI18n, t]);

  return (
    <View style={styles.rowLabel}>
      <Text style={{ color: colors.primary }}>{content}</Text>
      {required ? <Text style={{ color: colors.error }}> *</Text> : null}
    </View>
  );
};

export default TextInputLabel;
