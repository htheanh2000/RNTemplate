import AsyncStorage from '@react-native-async-storage/async-storage';
export async function getItem(key: string) {
  const value = await AsyncStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}
export async function setItem(key: string, value: any) {
  return AsyncStorage.setItem(key, JSON.stringify(value));
}
export async function removeItem(key: string) {
  return AsyncStorage.removeItem(key);
}
