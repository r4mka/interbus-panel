import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  'pl-PL': {
    translation: {
      common: {
        footer: 'InterBus Panel ©2019',
        homepage: 'Strona Główna',
      },
      button: {
        submit: 'Zapisz',
        cancel: 'Anuluj',
        delete: 'Usuń',
        back: 'Cofnij',
      },
      drivers: {
        drivers: 'Kierowcy',
        create: 'Dodaj kierowcę',
        delete: 'Usuń kierowcę',
      },
      cars: {
        cars: 'Samochody',
        create: 'Dodaj samochód',
        delete: 'Usuń samochód',
      },
      status: {
        active: 'aktywny',
        inactive: 'nieaktywny',
        vacation: 'urlop',
        service: 'serwis',
        blocked: 'zablokowany',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pl-PL',
});

export default i18n;
