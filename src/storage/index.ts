import AsyncStorage from '@react-native-community/async-storage';

const NS = 'Hundetrainer';

interface IStoreData {
  key: string;
  value: any;
  callback?: Function;
}

interface IRemoveData {
  key: string;
  callback?: Function;
}

export const storeData = async ({ key, value, callback }: IStoreData) => {
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

export const retrieveData = async ({ key, callback }: IRemoveData) => {
  try {
    await AsyncStorage.getItem(`@${NS}:${key}`).then(value => {
      if (value !== null) {
        callback(JSON.parse(value));
      } else {
        callback();
      }
    });
  } catch (error) {
    return undefined;
  }
};
