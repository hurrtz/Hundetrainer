import variable from 'theme/variables/platform';

export default (variables = variable) => {
  const cardTheme = {
    '.transparent': {
      shadowColor: undefined,
      shadowOffset: undefined,
      shadowOpacity: undefined,
      shadowRadius: undefined,
      elevation: undefined,
    },
    marginVertical: 5,
    marginHorizontal: 2,
    flex: 1,
    borderWidth: variables.borderWidth,
    borderRadius: 2,
    borderColor: variables.cardBorderColor,
    flexWrap: 'wrap',
    backgroundColor: variables.cardDefaultBg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
  };

  return cardTheme;
};
