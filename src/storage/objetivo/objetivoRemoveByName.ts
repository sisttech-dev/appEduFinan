import AsyncStorage from '@react-native-async-storage/async-storage';

import { VIDASOCIAL_COLLECTION } from '@storage/storageConfig';

import { objetivoGetAll } from './objetivoGetAll';

export async function objetivoRemoveByName(objetivoDeleted: string) {
  try {
    const storedObjetivo = await objetivoGetAll();

    const objetivosAtuais = storedObjetivo.filter(objetivo => objetivo !== objetivoDeleted);

    await AsyncStorage.setItem(VIDASOCIAL_COLLECTION, JSON.stringify(objetivosAtuais));
    await AsyncStorage.removeItem(`${VIDASOCIAL_COLLECTION}-${objetivoDeleted}`);
    
    // Obter os objetivos atualizados
    const objetivosAtualizados = await objetivoGetAll();

    // Retornar os objetivos atualizados
    return objetivosAtualizados;
  } catch (error) {
    throw error;
  }
}