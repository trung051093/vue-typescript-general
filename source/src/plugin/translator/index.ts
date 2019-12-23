import _Vue from 'vue';
export class PluginOptions { }

const TranslatorPlugin = {
    install(Vue: typeof _Vue, options?: PluginOptions) {

        console.log('TranslatorPlugin plugin is installing');

        Vue.prototype.$td = function (item: any, l?: string) {
            const langCode = l || this.$i18n.locale;
            const langShortCode: string = langCode;
            const locale: string = langShortCode.substring(0, 2).toLowerCase();
            return (function set(obj: any, shortLang: string) {
                let s = '';
                if (obj[shortLang] !== undefined || obj[shortLang] !== null || obj[shortLang] !== '') {
                    s = obj[shortLang];
                }
                return s;
            })(item, locale);
        };
    }
};

export default TranslatorPlugin;
