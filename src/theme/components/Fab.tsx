import variable from 'theme/variables/platform';

export default (variables = variable) => {
  const platform = variables.platform;

  const fabTheme = {
    'NativeBase.Button': {
      alignItems: 'center',
      padding: undefined,
      justifyContent: 'center',
      'NativeBase.Icon': {
        alignSelf: 'center',
      },
      'NativeBase.IconNB': {
        alignSelf: 'center',
        fontSize: 20,
        lineHeight: platform === 'ios' ? 24 : undefined,
      },
    },
  };

  return fabTheme;
};
