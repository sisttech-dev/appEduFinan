import AsyncStorage from '@react-native-async-storage/async-storage';

import { OBJVIDASOCIAL_COLLECTION } from '@storage/storageConfig';

import { objetivoGetAll } from './objetivoGetAll';

export async function objetivoRemoveByName(objetivoDeleted: string) {
  try {
    const storedObjetivo = await objetivoGetAll();

    const objetivo = storedObjetivo.filter(objetivo => objetivo !== objetivoDeleted);

    await AsyncStorage.setItem(OBJVIDASOCIAL_COLLECTION, JSON.stringify(objetivo));

  } catch (error) {
    throw error;
  }
}