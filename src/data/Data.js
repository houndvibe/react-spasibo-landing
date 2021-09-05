import MvideoLogo from '../assets/img/mvideo_logo.png'
import BORKLogo from '../assets/img/bork_logo.png'
import BkLogo from '../assets/img/bk_logo.png'
import EsLogo from '../assets/img/es_logo.png'
import HolLogo from '../assets/img/colls_logo.png'
import MvideoLogo_s from '../assets/img/mvideo_logo_small.png'
import EsLogo_s from '../assets/img/es_logo_small.png'
import HolLogo_s from '../assets/img/colls_logo_small.png'
import Mvideo_prev from '../assets/img/mvideo_prev.png'
import Hol_prev from '../assets/img/colls_prev.png'
import Es_prev from '../assets/img/es_prev.png'
import pyterochka_plate from '../assets/img/plate_img/5_plate.png'
import bk_plate from '../assets/img/plate_img/bk_plate.png'
import ivi_plate from '../assets/img/plate_img/ivi_plate.png'
import mega_plate from '../assets/img/plate_img/mega_plate.png'
import rep_plate from '../assets/img/plate_img/rep_plate.png'
import pc_plate from '../assets/img/plate_img/pc_plate.png'
import lm_plate from '../assets/img/plate_img/lm_plate.png'
import mt_plate from '../assets/img/plate_img/mt_plate.png'
import bz_plate from '../assets/img/plate_img/bz_plate.png'
import lr_plate from '../assets/img/plate_img/lr_plate.png'
import bc_plate from '../assets/img/plate_img/bc_plate.png'
import tez_plate from '../assets/img/plate_img/tez_plate.png'
import sb_plate from '../assets/img/plate_img/sb_plate.png'
import oz_plate from '../assets/img/plate_img/oz_plate.png'
import tr_plate from '../assets/img/plate_img/tr_plate.png'
import BilApple from '../assets/img/billboard_apple.jpg'
import AppleMarker from '../assets/img/address_apple.png'
import sub_red from '../assets/img/subway_red.png'
import sub_green from '../assets/img/subway_green.png'

export const menuElements = [
  { title: 'Купоны и сертификаты', path: '/coupons' },
  { title: 'Впечатления', path: '/impressions' },
  { title: 'Авиабилеты', path: '/flights' },
  { title: 'Ж/д билеты', path: '/tickets' },
  { title: 'Отели', path: '/hotels' },
  { title: 'Каршеринг', path: '/carsharing' },
  { title: 'Театры', path: '/goods' },
  { title: 'Страхование', path: '/insurance' },
  { title: 'Как подключиться', path: '/connect' },
  { title: 'Партнеры', path: '/' },

]

export const navButtonsData = [
  'Все партнеры',
  'Популярные',
  'Супермаркеты',
  'Кафе и рестораны',
  'Такси',
  'Красота',
  'Электроника и бытовая техника',
  'Зоотовары',
  'Кино и театр',
  '...'
];

export const cardsData = [
  {
    percent: '1,5',
    name: 'М.Видео',
    logo: MvideoLogo
  },
  {
    percent: '3',
    name: 'Бургер Кинг',
    logo: BkLogo
  },
  {
    percent: '4,5',
    name: 'Холодильник.ру',
    logo: HolLogo
  },
  {
    percent: 'от 1,5',
    name: 'BORK',
    logo: BORKLogo
  },
  {
    percent: '1,5',
    name: 'Евросеть',
    logo: EsLogo
  }
];

export const offersData = [
  {
    preview: Hol_prev,
    logo: HolLogo_s,
    name: 'Технопарк',
    text: '20% спасибо за технику Electrolux'
  },
  {
    preview: Es_prev,
    logo: EsLogo_s,
    name: 'Евросеть',
    text: '10% спасибо за покупки в черную пятницу'
  },
  {
    preview: Mvideo_prev,
    logo: MvideoLogo_s,
    name: 'М.Видео',
    text: '15% спасибо для студентов'
  }
];

export const platesData = [
  {
    text: 'Скидки за бонусы',
    content: [
      bk_plate,
      pyterochka_plate,
      rep_plate,
      mega_plate,
      ivi_plate
    ]
  },
  {
    text: 'Большой % начисления',
    content: [
      bz_plate,
      pyterochka_plate,
      lr_plate
    ]
  },
  {
    text: 'Выгодные купоны',
    content: [
      pc_plate,
      lm_plate,
      mt_plate
    ]
  },
  {
    text: 'Персональное исходя из трат',
    content: [
      oz_plate,
      tez_plate,
      bc_plate,
      sb_plate,
      tr_plate
    ]
  },

]

export const billboardsData = [
  {
    name: 'AppleMusic',
    id: 1,
    content: {
      poster: BilApple,
      date: ' C 17 Декабря 2018 г. по 17 Декабря 2019 г.',
      text: {
        profits: {
          title: 'Обменивайте 169 СПАСИБО на месяц подписки в Apple Music и наслаждайтесь любимой музыкой без перерыва',
          items: [
            'Получите доступ к миллионам альбомов, исполнителей и песен',
            'Эксклюзивный и оригинальный контент',
            'Вы можете отказаться от подписки в любой момент',
            'Скачивайте любимую музыку и слушайте офлайн',
          ]
        },
        howToUse: {
          title: 'Как использовать промо-код:',
          items: [
            '  Откройте приложение «Музыка» и введите существующий Apple ID и пароль для входа в учетную запись.(Если у   вас нет Apple ID, вам будет предложено его создать)',
            '  Нажмите на «3 месяца бесплатно» (специальное предложение для новых пользователей)',
            '  Выберите индивидуальную подписку и нажмите «3 месяца бесплатно»',
            '  Перейдите в учетную запись',
            '  Нажмите «Использовать код»',
            '  Введите 12 - значный код',
            '  Получите сообщение с подтверждением использования кода'
          ]
        },
        info: 'Под персональными данными в целях настоящих Правил понимаются персональные данные Участников Акции и иных лиц - субъектов персональных данных как они определены в Законе «О персональных данных». Под обработкой персональных данных в настоящих Правилах понимается любое действие (операция), совершаемое в целях проведения Акции, или совокупность действий(операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональныхданных, предоставленных Участником Акции Банку/ Уполномоченной Компании.',
        links: [
          {
            title: 'Подробнее об Apple Music для Android',
            src: '/'
          },
          {
            title: 'Правила акции',
            src: '/'
          }
        ],
        terms: `Только при оформлении индивидуальной подписки. По окончании пробного периода подписка будет продлена автоматически. 4 месяца бесплатно только для новых подписчиков. Срок действия кода истекает 31 января 2020 года. Это промокод, который не подлежит перепродаже, обмену на денежный эквивалент и замене в случае кражи или потери. Предложение действительно при оформлении индивидуальной подписки на Apple Music на территории Российской Федерации. Требуется учетная запись iTunes. Применяются соответствующие условия (подробнее).
          Промокодом может воспользоваться лицо старше 13 лет, чье местоположение совпадает со страной/регионом магазина, в котором активируется код.
          Требуются совместимые продукты и сервисы. Apple Music — зарегистрированная торговая марка Apple. Apple не является участником или спонсором этой промоакции.`
      }
    }
  }
];

export const adressDdata = [
  {
    marker: AppleMarker,
    address: 'Москва, ул. Большая Татарская, 21',
    stations: [
      { name: 'Маяковская', img: sub_green },
      { name: 'Лубянка', img: sub_red }
    ],
    number: ' +7 495 220-30-44',
    time: 'Ежедневно с 09:00 до 21:00',
    link: {
      text: 'apple.com', src: '/'
    }
  },
  {
    marker: AppleMarker,
    address: 'Москва, ул. Большая Татарская, 21',
    stations: [
      { name: 'Маяковская', img: sub_green },
      { name: 'Лубянка', img: sub_red }
    ],
    number: ' +7 495 220-30-44',
    time: 'Ежедневно с 09:00 до 21:00',
    link: {
      text: 'apple.com', src: '/'
    }
  },
  {
    marker: AppleMarker,
    address: 'Москва, ул. Большая Татарская, 21',
    stations: [
      { name: 'Маяковская', img: sub_green },
      { name: 'Лубянка', img: sub_red }
    ],
    number: ' +7 495 220-30-44',
    time: 'Ежедневно с 09:00 до 21:00',
    link: {
      text: 'apple.com', src: '/'
    }
  }

]