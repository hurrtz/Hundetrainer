import AsyncStorage from '@react-native-community/async-storage';

const NS = 'Hundetrainer';

export const storeData = async ({
  key,
  value,
}: {
  key: string;
  value: any;
}) => {
  try {
    const valueString = JSON.stringify(value);

    await AsyncStorage.setItem(`@${NS}:${key}`, valueString);

    return valueString;
  } catch (error) {
    // Error saving data
    return undefined;
  }
};

export const retrieveData = async (key: string, callback: Function) => {
  try {
    await AsyncStorage.getItem(`@${NS}:${key}`).then(value => {
      if (value !== null) {
        callback(JSON.parse(value));
      }
    });
  } catch (error) {
    return undefined;
  }
};
