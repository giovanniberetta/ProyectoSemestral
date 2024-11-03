import axios from 'axios';

const GOOGLE_TRANSLATE_API_URL = 'https://translation.googleapis.com/language/translate/v2';
const API_KEY = 'AIzaSyBDBW1cxlywI6cmNoGhF22JzL217cNoNJE'; // Asegúrate de que tu clave de API sea correcta

export const translateText = async (text, targetLanguage) => {
  try {
    const response = await axios.post(GOOGLE_TRANSLATE_API_URL, null, {
      params: {
        q: text,
        target: targetLanguage,
        key: API_KEY,
      },
    });

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    throw error;
  }
};
