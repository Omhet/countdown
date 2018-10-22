export const getYandexDicUrl = word => {
    return 'https://dictionary.yandex.net/' +
    'api/v1/dicservice.json/' +
    'lookup?key=dict.1.1.20181017T054446Z.8828bf2afad54623.4a6026cd581541a63e2fe5172389bf0da8ffab88&' +
    'lang=ru-ru&' +
    'text=' + word;
};