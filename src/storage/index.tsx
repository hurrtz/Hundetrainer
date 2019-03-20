import AsyncStorage from '@react-native-community/async-storage';

const NS = 'Hundetrainer';

export const storeData = async ({
  key,
  value,
  callback,
}: {
  key: string;
  value: any;
  callback?: Function;
}) => {
  try {
    const valueString = JSON.stringify(value);

    await AsyncStorage.setItem(`@${NS}:${key}`, valueString).then(() => {
      if (callback) {
        callback();
      }
    });

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
