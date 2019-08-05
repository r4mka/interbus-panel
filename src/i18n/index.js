import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  'pl-PL': {
    translation: {
      common: {
        footer: 'InterBus Panel ©2019',
        homepage: 'Strona Główna',
        stats: 'Statystyki',
        lastDepartures: 'Ostatnie wyjazdy',
        details: 'Szczegóły',
      },
      button: {
        submit: 'Zapisz',
        cancel: 'Anuluj',
        delete: 'Usuń',
        back: 'Cofnij',
      },
      cars: {
        cars: 'Samochody',
        create: 'Dodaj samochód',
        delete: 'Usuń samochód',
      },
      drivers: {
        drivers: 'Kierowcy',
        create: 'Dodaj kierowcę',
        delete: 'Usuń kierowcę',
      },
      orders: {
        orders: 'Zamówienia',
        create: 'Dodaj zamówienie',
        delete: 'Usuń zamówienie',
      },
      status: {
        active: 'aktywny',
        inactive: 'nieaktywny',
        vacation: 'urlop',
        service: 'serwis',
        blocked: 'zablokowany',
      },
      validators: {
        required: 'To pole jest wymagane',
        default: 'Nieprawidłowa wartość',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pl-PL',
});

export default i18n;
